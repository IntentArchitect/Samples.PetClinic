using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;
using PetClinic.Infrastructure.Persistence;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.Repositories.Repository", Version = "1.0")]

namespace PetClinic.Infrastructure.Repositories
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class OwnerRepository : RepositoryBase<Owner, Owner, ApplicationDbContext>, IOwnerRepository
    {
        public OwnerRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<Owner> FindByIdAsync(int id, CancellationToken cancellationToken = default)
        {
            return await FindAsync(x => x.Id == id, cancellationToken);
        }

        public async Task<List<Owner>> FindByIdsAsync(int[] ids, CancellationToken cancellationToken = default)
        {
            return await FindAllAsync(x => ids.Contains(x.Id), cancellationToken);
        }
    }
}