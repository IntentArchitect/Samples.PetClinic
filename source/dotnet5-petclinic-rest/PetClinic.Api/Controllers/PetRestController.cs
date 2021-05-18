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
    [Route("api/pets")]
    public class PetRestController : ControllerBase
    {
        private readonly IPetService _appService;
        private readonly ApplicationDbContext _dbContext;

        public PetRestController(IPetService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet("{petId}")]
        public async Task<ActionResult<PetDTO>> getPet(int petId, CancellationToken cancellationToken)
        {
            var result = default(PetDTO);

            result = await _appService.GetPet(petId);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> addPet(PetCreateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.AddPet(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpPut("{petId}")]
        public async Task<ActionResult> updatePet(int petId, PetUpdateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdatePet(petId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{petId}")]
        public async Task<ActionResult> deletePet(int petId, CancellationToken cancellationToken)
        {

            await _appService.DeletePet(petId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }


    }
}