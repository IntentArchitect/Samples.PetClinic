using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PetClinic.Domain.Common.Interfaces;
using PetClinic.Domain.Repositories;
using PetClinic.Infrastructure.Persistence;
using PetClinic.Infrastructure.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Infrastructure.DependencyInjection.DependencyInjection", Version = "1.0")]

namespace PetClinic.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>((sp, options) =>
            {
                options.UseInMemoryDatabase("DefaultConnection");
                options.UseLazyLoadingProxies();
            });
            services.AddScoped<IUnitOfWork>(provider => provider.GetRequiredService<ApplicationDbContext>());
            services.AddTransient<IOwnerRepository, OwnerRepository>();
            services.AddTransient<IPetRepository, PetRepository>();
            services.AddTransient<IPetTypeRepository, PetTypeRepository>();
            services.AddTransient<ISpecialtyRepository, SpecialtyRepository>();
            services.AddTransient<IVetRepository, VetRepository>();
            services.AddTransient<IVisitRepository, VisitRepository>();
            return services;
        }
    }
}