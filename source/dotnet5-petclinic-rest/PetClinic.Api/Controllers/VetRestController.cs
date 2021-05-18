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
    [Route("api/vets")]
    public class VetRestController : ControllerBase
    {
        private readonly IVetService _appService;
        private readonly ApplicationDbContext _dbContext;

        public VetRestController(IVetService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet]
        public async Task<ActionResult<List<VetDTO>>> getAllVets(CancellationToken cancellationToken)
        {
            var result = default(List<VetDTO>);

            result = await _appService.GetAllVets();

            return Ok(result);
        }

        [HttpGet("{vetId}")]
        public async Task<ActionResult<VetDTO>> getVet(int vetId, CancellationToken cancellationToken)
        {
            var result = default(VetDTO);

            result = await _appService.GetVet(vetId);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> addVet(VetCreateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.AddVet(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpPut("{vetId}")]
        public async Task<ActionResult> updateVet(int vetId, VetUpdateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateVet(vetId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{vetId}")]
        public async Task<ActionResult> deleteVet(int vetId, CancellationToken cancellationToken)
        {

            await _appService.DeleteVet(vetId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }


    }
}