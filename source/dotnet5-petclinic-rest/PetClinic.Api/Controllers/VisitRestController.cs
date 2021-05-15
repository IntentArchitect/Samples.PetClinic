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
    [Route("api/visits")]
    public class VisitRestController : ControllerBase
    {
        private readonly IVisitService _appService;
        private readonly ApplicationDbContext _dbContext;

        public VisitRestController(IVisitService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet("{visitId}")]
        public async Task<ActionResult<PetVisitDTO>> getVisit(int visitId)
        {
            var result = default(PetVisitDTO);

            result = await _appService.GetVisit(visitId);
            await _dbContext.SaveChangesAsync();

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> addVisit(VisitCreateDTO dto)
        {

            await _appService.AddVisit(dto);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{visitId}")]
        public async Task<ActionResult> updateVisit(int visitId, VisitUpdateDTO dto)
        {

            await _appService.UpdateVisit(visitId, dto);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{visitId}")]
        public async Task<ActionResult> deleteVisit(int visitId)
        {

            await _appService.DeleteVisit(visitId);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }


    }
}