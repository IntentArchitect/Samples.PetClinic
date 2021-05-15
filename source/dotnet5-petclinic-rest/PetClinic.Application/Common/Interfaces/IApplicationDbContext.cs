using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.DbContextInterface", Version = "1.0")]

namespace PetClinic.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Owner> Owners { get; set; }

        DbSet<Pet> Pets { get; set; }

        DbSet<PetType> PetTypes { get; set; }

        DbSet<Specialty> Specialties { get; set; }

        DbSet<Vet> Vets { get; set; }

        DbSet<Visit> Visits { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}