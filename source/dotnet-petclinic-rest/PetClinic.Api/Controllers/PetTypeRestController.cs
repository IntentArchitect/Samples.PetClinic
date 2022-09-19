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
    [Route("api/pettypes")]
    public class PetTypeRestController : ControllerBase
    {
        private readonly IPetTypeService _appService;
        private readonly IUnitOfWork _unitOfWork;

        public PetTypeRestController(IPetTypeService appService,
            IUnitOfWork unitOfWork)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified List&lt;PetTypeDTO&gt;.</response>
        [HttpGet]
        [ProducesResponseType(typeof(List<PetTypeDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<PetTypeDTO>>> getAllPetTypes(CancellationToken cancellationToken)
        {
            var result = default(List<PetTypeDTO>);

            result = await _appService.GetAllPetTypes();

            return Ok(result);
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Returns the specified PetTypeDTO.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        /// <response code="404">Can't find an PetTypeDTO with the parameters provided.</response>
        [HttpGet("{petTypeId}")]
        [ProducesResponseType(typeof(PetTypeDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<PetTypeDTO>> getPetType([FromRoute] int petTypeId, CancellationToken cancellationToken)
        {
            var result = default(PetTypeDTO);

            result = await _appService.GetPetType(petTypeId);

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
        public async Task<ActionResult<int>> addPetType([FromBody] PetTypeDTO dto, CancellationToken cancellationToken)
        {
            var result = default(int);

            result = await _appService.AddPetType(dto);

            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Created(string.Empty, result);
        }

        /// <summary>
        /// </summary>
        /// <response code="204">Successfully updated.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpPut("{petTypeId}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> updatePetType([FromRoute] int petTypeId, [FromBody] PetTypeDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdatePetType(petTypeId, dto);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return NoContent();
        }

        /// <summary>
        /// </summary>
        /// <response code="200">Successfully deleted.</response>
        /// <response code="400">One or more validation errors have occurred.</response>
        [HttpDelete("{petTypeId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> deletePetType([FromRoute] int petTypeId, CancellationToken cancellationToken)
        {

            await _appService.DeletePetType(petTypeId);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            return Ok();
        }


    }
}