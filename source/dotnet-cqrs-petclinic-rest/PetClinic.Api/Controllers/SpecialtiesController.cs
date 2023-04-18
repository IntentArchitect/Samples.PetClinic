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
using PetClinic.Application.Specialties;
using PetClinic.Application.Specialties.CreateSpecialty;
using PetClinic.Application.Specialties.DeleteSpecialty;
using PetClinic.Application.Specialties.GetSpecialties;
using PetClinic.Application.Specialties.GetSpecialtyById;
using PetClinic.Application.Specialties.UpdateSpecialty;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Controllers.Controller", Version = "1.0")]

namespace PetClinic.Api.Controllers
{
    [ApiController]
    public class SpecialtiesController : ControllerBase
    {
        private readonly ISender _mediator;

        public SpecialtiesController(ISender mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        /// <summary>
        /// </summary>
        /// <response code="201">Successfully created.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPost("api/specialties")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(JsonResponse<int>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<int>> CreateSpecialty(
            [FromBody] CreateSpecialtyCommand command,
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(command, cancellationToken);
            return CreatedAtAction(nameof(GetSpecialtyById), new { id = result }, new { Id = result });
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("api/specialties/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> DeleteSpecialty([FromRoute] int id, CancellationToken cancellationToken)
        {
            await _mediator.Send(new DeleteSpecialtyCommand { Id = id }, cancellationToken);
            return Ok();
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("api/specialties/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> UpdateSpecialty(
            [FromRoute] int id,
            [FromBody] UpdateSpecialtyCommand command,
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
        /// <response code="200">Returns the specified List&lt;SpecialtyDto&gt;.</response>
        [HttpGet("api/specialties")]
        [ProducesResponseType(typeof(List<SpecialtyDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<SpecialtyDto>>> GetSpecialties(CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetSpecialtiesQuery(), cancellationToken);
            return Ok(result);
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified SpecialtyDto.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an SpecialtyDto with the parameters provided.</response>
        [HttpGet("api/specialties/{id}")]
        [ProducesResponseType(typeof(SpecialtyDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<SpecialtyDto>> GetSpecialtyById(
            [FromRoute] int id,
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetSpecialtyByIdQuery { Id = id }, cancellationToken);
            return result != null ? Ok(result) : NotFound();
        }
    }
}