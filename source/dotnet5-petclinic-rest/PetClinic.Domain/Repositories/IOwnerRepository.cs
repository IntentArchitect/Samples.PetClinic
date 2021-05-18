using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;
using System.Threading;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.Repositories.Api.EntityInterface", Version = "1.0")]

namespace PetClinic.Domain.Repositories
{
    public interface IOwnerRepository : IRepository<IOwner, Owner>
    {
        Task<IOwner> FindByIdAsync(int id, CancellationToken cancellationToken = default);
        Task<List<IOwner>> FindByIdsAsync(int[] ids, CancellationToken cancellationToken = default);
    }
}