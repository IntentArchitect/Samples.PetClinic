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
    [Route("api/specialties")]
    public class SpecialtyRestController : ControllerBase
    {
        private readonly ISpecialtyService _appService;
        private readonly ApplicationDbContext _dbContext;

        public SpecialtyRestController(ISpecialtyService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet]
        public async Task<ActionResult<List<SpecialtyDTO>>> getAllSpecialties(CancellationToken cancellationToken)
        {
            var result = default(List<SpecialtyDTO>);

            result = await _appService.GetAllSpecialties();

            return Ok(result);
        }

        [HttpGet("{specialtyId}")]
        public async Task<ActionResult<SpecialtyDTO>> getSpecialty(int specialtyId, CancellationToken cancellationToken)
        {
            var result = default(SpecialtyDTO);

            result = await _appService.GetSpecialty(specialtyId);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> addSpecialty(SpecialtyDTO dto, CancellationToken cancellationToken)
        {
            var result = default(int);

            result = await _appService.AddSpecialty(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return Ok(result);
        }

        [HttpPut("{specialtyId}")]
        public async Task<ActionResult> updateSpecialty(int specialtyId, SpecialtyDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateSpecialty(specialtyId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{specialtyId}")]
        public async Task<ActionResult> deleteSpecialty(int specialtyId, CancellationToken cancellationToken)
        {

            await _appService.DeleteSpecialty(specialtyId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }


    }
}