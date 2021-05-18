using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PetClinic.Application;
using PetClinic.Application.Interfaces;
using PetClinic.Infrastructure.Persistence;
using PetClinic.Application.Dtos;
using System.Threading;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Controllers.Controller", Version = "1.0")]

namespace PetClinic.Api.Controllers
{
    [ApiController]
    [Route("api/pettypes")]
    public class PetTypeRestController : ControllerBase
    {
        private readonly IPetTypeService _appService;
        private readonly ApplicationDbContext _dbContext;

        public PetTypeRestController(IPetTypeService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet]
        public async Task<ActionResult<List<PetTypeDTO>>> getAllPetTypes(CancellationToken cancellationToken)
        {
            var result = default(List<PetTypeDTO>);

            result = await _appService.GetAllPetTypes();

            return Ok(result);
        }

        [HttpGet("{petTypeId}")]
        public async Task<ActionResult<PetTypeDTO>> getPetType(int petTypeId, CancellationToken cancellationToken)
        {
            var result = default(PetTypeDTO);

            result = await _appService.GetPetType(petTypeId);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> addPetType(PetTypeDTO dto, CancellationToken cancellationToken)
        {
            var result = default(int);

            result = await _appService.AddPetType(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return Ok(result);
        }

        [HttpPut("{petTypeId}")]
        public async Task<ActionResult> updatePetType(int petTypeId, PetTypeDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdatePetType(petTypeId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{petTypeId}")]
        public async Task<ActionResult> deletePetType(int petTypeId, CancellationToken cancellationToken)
        {

            await _appService.DeletePetType(petTypeId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }


    }
}