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
    public class PetRepository : RepositoryBase<IPet, Pet, ApplicationDbContext>, IPetRepository
    {
        public PetRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IPet> FindByIdAsync(int id)
        {
            return await FindAsync(x => x.Id == id);
        }

        public async Task<List<IPet>> FindByIdsAsync(params int[] ids)
        {
            return await FindAllAsync(x => ids.Contains(x.Id));
        }
    }
}