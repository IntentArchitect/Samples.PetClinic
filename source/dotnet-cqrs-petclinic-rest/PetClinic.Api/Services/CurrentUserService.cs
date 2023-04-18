using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using Intent.RoslynWeaver.Attributes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Identity.CurrentUserService", Version = "1.0")]

namespace PetClinic.Api.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly ClaimsPrincipal _claimsPrincipal;
        private readonly IAuthorizationService _authorizationService;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor, IAuthorizationService authorizationService)
        {
            _claimsPrincipal = httpContextAccessor?.HttpContext?.User;
            _authorizationService = authorizationService;
        }

        public string UserId => _claimsPrincipal?.FindFirst(JwtClaimTypes.Subject)?.Value;
        public string UserName => _claimsPrincipal?.FindFirst(JwtClaimTypes.Name)?.Value;

        public async Task<bool> AuthorizeAsync(string policy)
        {
            return (await _authorizationService.AuthorizeAsync(_claimsPrincipal, policy)).Succeeded;
        }

        public async Task<bool> IsInRoleAsync(string role)
        {
            return await Task.FromResult(_claimsPrincipal?.IsInRole(role) ?? false);
        }
    }
}