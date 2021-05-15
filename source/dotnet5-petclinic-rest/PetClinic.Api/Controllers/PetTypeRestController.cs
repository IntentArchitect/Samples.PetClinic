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
        public async Task<ActionResult<List<PetTypeDTO>>> getAllPetTypes()
        {
            var result = default(List<PetTypeDTO>);

            result = await _appService.GetAllPetTypes();
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }

        [HttpGet("{petTypeId}")]
        public async Task<ActionResult<PetTypeDTO>> getPetType(int petTypeId)
        {
            var result = default(PetTypeDTO);

            result = await _appService.GetPetType(petTypeId);
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> addPetType(PetTypeDTO dto)
        {
            var result = default(int);

            result = await _appService.AddPetType(dto);
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }

        [HttpPut("{petTypeId}")]
        public async Task<ActionResult> updatePetType(int petTypeId, PetTypeDTO dto)
        {

            await _appService.UpdatePetType(petTypeId, dto);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{petTypeId}")]
        public async Task<ActionResult> deletePetType(int petTypeId)
        {

            await _appService.DeletePetType(petTypeId);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }


    }
}