using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PetClinic.Application;
using PetClinic.Application.Dtos;
using PetClinic.Application.Interfaces;
using PetClinic.Domain.Common.Interfaces;
using PetClinic.Infrastructure.Persistence;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Controllers.Controller", Version = "1.0")]

namespace PetClinic.Api.Controllers
{
    [ApiController]
    [Route("api/visits")]
    public class VisitRestController : ControllerBase
    {
        private readonly IVisitService _appService;
        private readonly IUnitOfWork _unitOfWork;

        public VisitRestController(IVisitService appService,
            IUnitOfWork unitOfWork)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified VisitDTO.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an VisitDTO with the parameters provided.</response>
        [HttpGet("{visitId}")]
        [ProducesResponseType(typeof(VisitDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<VisitDTO>> getVisit([FromRoute] int visitId, CancellationToken cancellationToken)
        {
            var result = default(VisitDTO);

            result = await _appService.GetVisit(visitId);

            return Ok(result);
        }

        /// <summary>
        /// </summary>
        /// <response code="201">Successfully created.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> addVisit([FromBody] VisitCreateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.AddVisit(dto);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Created(string.Empty, null);
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("{visitId}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> updateVisit([FromRoute] int visitId, [FromBody] VisitUpdateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateVisit(visitId, dto);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("{visitId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> deleteVisit([FromRoute] int visitId, CancellationToken cancellationToken)
        {

            await _appService.DeleteVisit(visitId);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Ok();
        }


    }
}