using System;
using System.Collections.Generic;
using System.Net.Mime;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PetClinic.Api.Controllers.ResponseTypes;
using PetClinic.Application.Vets;
using PetClinic.Application.Vets.CreateVet;
using PetClinic.Application.Vets.DeleteVet;
using PetClinic.Application.Vets.GetVetById;
using PetClinic.Application.Vets.GetVets;
using PetClinic.Application.Vets.UpdateVet;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Controllers.Controller", Version = "1.0")]

namespace PetClinic.Api.Controllers
{
    [ApiController]
    public class VetsController : ControllerBase
    {
        private readonly ISender _mediator;

        public VetsController(ISender mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        /// <summary>
        /// </summary>
        /// <response code="201">Successfully created.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPost("api/vets")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(JsonResponse<int>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<int>> CreateVet(
            [FromBody] CreateVetCommand command,
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(command, cancellationToken);
            return CreatedAtAction(nameof(GetVetById), new { id = result }, new JsonResponse<int>(result));
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("api/vets/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> DeleteVet([FromRoute] int id, CancellationToken cancellationToken)
        {
            await _mediator.Send(new DeleteVetCommand { Id = id }, cancellationToken);
            return Ok();
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("api/vets/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> UpdateVet(
            [FromRoute] int id,
            [FromBody] UpdateVetCommand command,
            CancellationToken cancellationToken)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await _mediator.Send(command, cancellationToken);
            return NoContent();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified VetDto.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an VetDto with the parameters provided.</response>
        [HttpGet("api/vets/{id}")]
        [ProducesResponseType(typeof(VetDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<VetDto>> GetVetById([FromRoute] int id, CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetVetByIdQuery { Id = id }, cancellationToken);
            return result != null ? Ok(result) : NotFound();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified List&lt;VetDto&gt;.</response>
        [HttpGet("api/vets")]
        [ProducesResponseType(typeof(List<VetDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<VetDto>>> GetVets(CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetVetsQuery(), cancellationToken);
            return Ok(result);
        }
    }
}