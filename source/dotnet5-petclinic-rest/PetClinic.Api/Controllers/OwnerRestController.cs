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
    [Route("api/owners")]
    public class OwnerRestController : ControllerBase
    {
        private readonly IOwnerService _appService;
        private readonly ApplicationDbContext _dbContext;

        public OwnerRestController(IOwnerService appService,
                ApplicationDbContext dbContext)
        {
            _appService = appService ?? throw new ArgumentNullException(nameof(appService));
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        [HttpGet]
        public async Task<ActionResult<List<OwnerDTO>>> getOwners(CancellationToken cancellationToken)
        {
            var result = default(List<OwnerDTO>);

            result = await _appService.GetOwners();

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> addOwner(OwnerCreateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.AddOwner(dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpGet("{ownerId}")]
        public async Task<ActionResult<OwnerDTO>> getOwner(int ownerId, CancellationToken cancellationToken)
        {
            var result = default(OwnerDTO);

            result = await _appService.GetOwner(ownerId);

            return Ok(result);
        }

        [HttpPut("{ownerId}")]
        public async Task<ActionResult> updateOwner(int ownerId, OwnerUpdateDTO dto, CancellationToken cancellationToken)
        {

            await _appService.UpdateOwner(ownerId, dto);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpDelete("{ownerId}")]
        public async Task<ActionResult> deleteOwner(int ownerId, CancellationToken cancellationToken)
        {

            await _appService.DeleteOwner(ownerId);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return NoContent();
        }

        [HttpGet("*/lastname/{lastName}")]
        public async Task<ActionResult<List<OwnerDTO>>> getOwnersList(string lastName, CancellationToken cancellationToken)
        {
            var result = default(List<OwnerDTO>);

            result = await _appService.GetOwnersList(lastName);

            return Ok(result);
        }


    }
}