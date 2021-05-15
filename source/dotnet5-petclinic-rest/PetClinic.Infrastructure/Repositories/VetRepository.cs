using System;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;
using PetClinic.Infrastructure.Persistence;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.Repositories.Implementation", Version = "1.0")]

namespace PetClinic.Infrastructure.Repositories
{
    [IntentManaged(Mode.Merge)]
    public class VetRepository : RepositoryBase<IVet, Vet, ApplicationDbContext>, IVetRepository
    {
        public VetRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IVet> FindByIdAsync(int id)
        {
            return await FindAsync(x => x.Id == id);
        }

        public async Task<List<IVet>> FindByIdsAsync(params int[] ids)
        {
            return await FindAllAsync(x => ids.Contains(x.Id));
        }
    }
}