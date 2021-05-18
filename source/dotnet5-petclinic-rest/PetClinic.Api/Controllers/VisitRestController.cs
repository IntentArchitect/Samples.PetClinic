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
        public async Task<ActionResult<VisitDTO>> getVisit(int visitId, CancellationToken cancellationToken)
        {
            var result = default(VisitDTO);

            result = await _appService.GetVisit(visitId);

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> addVisit(VisitCreateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.AddVisit(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpPut("{visitId}")]
        public async Task<ActionResult> updateVisit(int visitId, VisitUpdateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateVisit(visitId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{visitId}")]
        public async Task<ActionResult> deleteVisit(int visitId, CancellationToken cancellationToken)
        {

            await _appService.DeleteVisit(visitId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }


    }
}