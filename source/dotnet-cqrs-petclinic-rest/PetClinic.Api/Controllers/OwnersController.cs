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
using PetClinic.Application.Owners;
using PetClinic.Application.Owners.CreateOwner;
using PetClinic.Application.Owners.DeleteOwner;
using PetClinic.Application.Owners.GetOwnerById;
using PetClinic.Application.Owners.GetOwnerByLastName;
using PetClinic.Application.Owners.GetOwners;
using PetClinic.Application.Owners.UpdateOwner;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Controllers.Controller", Version = "1.0")]

namespace PetClinic.Api.Controllers
{
    [ApiController]
    public class OwnersController : ControllerBase
    {
        private readonly ISender _mediator;

        public OwnersController(ISender mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        /// <summary>
        /// </summary>
        /// <response code="201">Successfully created.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPost("api/owners")]
        [Produces(MediaTypeNames.Application.Json)]
        [ProducesResponseType(typeof(JsonResponse<int>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<int>> CreateOwner(
            [FromBody] CreateOwnerCommand command,
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(command, cancellationToken);
            return CreatedAtAction(nameof(GetOwnerById), new { id = result }, new { Id = result });
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("api/owners/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> DeleteOwner([FromRoute] int id, CancellationToken cancellationToken)
        {
            await _mediator.Send(new DeleteOwnerCommand { Id = id }, cancellationToken);
            return Ok();
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("api/owners/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> UpdateOwner(
            [FromRoute] int id,
            [FromBody] UpdateOwnerCommand command,
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
        /// <response code="200">Returns the specified OwnerDto.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an OwnerDto with the parameters provided.</response>
        [HttpGet("api/owners/{id}")]
        [ProducesResponseType(typeof(OwnerDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<OwnerDto>> GetOwnerById([FromRoute] int id, CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetOwnerByIdQuery { Id = id }, cancellationToken);
            return result != null ? Ok(result) : NotFound();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified OwnerDto.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an OwnerDto with the parameters provided.</response>
        [HttpGet("api/owners/*/lastName/{lastName}")]
        [ProducesResponseType(typeof(OwnerDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<OwnerDto>> GetOwnerByLastName(
            [FromRoute] string lastName,
            CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetOwnerByLastName { LastName = lastName }, cancellationToken);
            return result != null ? Ok(result) : NotFound();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified List&lt;OwnerDto&gt;.</response>
        [HttpGet("api/owners")]
        [ProducesResponseType(typeof(List<OwnerDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<OwnerDto>>> GetOwners(CancellationToken cancellationToken)
        {
            var result = await _mediator.Send(new GetOwnersQuery(), cancellationToken);
            return Ok(result);
        }
    }
}