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
    [Route("api/specialties")]
    public class SpecialtyRestController : ControllerBase
    {
        private readonly ISpecialtyService _appService;
        private readonly IUnitOfWork _unitOfWork;

        public SpecialtyRestController(ISpecialtyService appService,
            IUnitOfWork unitOfWork)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified List&lt;SpecialtyDTO&gt;.</response>
        [HttpGet]
        [ProducesResponseType(typeof(List<SpecialtyDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<SpecialtyDTO>>> getAllSpecialties(CancellationToken cancellationToken)
        {
            var result = default(List<SpecialtyDTO>);

            result = await _appService.GetAllSpecialties();

            return Ok(result);
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified SpecialtyDTO.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an SpecialtyDTO with the parameters provided.</response>
        [HttpGet("{specialtyId}")]
        [ProducesResponseType(typeof(SpecialtyDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<SpecialtyDTO>> getSpecialty([FromRoute] int specialtyId, CancellationToken cancellationToken)
        {
            var result = default(SpecialtyDTO);

            result = await _appService.GetSpecialty(specialtyId);

            return Ok(result);
        }

        /// <summary>
        /// </summary>
        /// <response code="201">Successfully created.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPost]
        [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<int>> addSpecialty([FromBody] SpecialtyDTO dto, CancellationToken cancellationToken)
        {
            var result = default(int);

            result = await _appService.AddSpecialty(dto);

            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Created(string.Empty, result);
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("{specialtyId}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> updateSpecialty([FromRoute] int specialtyId, [FromBody] SpecialtyDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateSpecialty(specialtyId, dto);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("{specialtyId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> deleteSpecialty([FromRoute] int specialtyId, CancellationToken cancellationToken)
        {

            await _appService.DeleteSpecialty(specialtyId);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Ok();
        }


    }
}