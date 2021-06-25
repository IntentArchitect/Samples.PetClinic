using Intent.RoslynWeaver.Attributes;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PetClinic.Api.Filters;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.AspNetCore.Swashbuckle.SwashbuckleConfiguration", Version = "1.0")]

namespace PetClinic.Api.Configuration
{
    public static class SwashbuckleConfiguration
    {
        public static IServiceCollection ConfigureSwagger(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSwaggerGen(c => c.OperationFilter<AuthorizeCheckOperationFilter>());
            services.Configure<SwaggerGenOptions>(configuration.GetSection("Swashbuckle:SwaggerGen"));
            services.Configure<SwaggerOptions>(configuration.GetSection("Swashbuckle:Swagger"));
            services.Configure<SwaggerUIOptions>(configuration.GetSection("Swashbuckle:SwaggerUI"));
            return services;
        }
    }
}