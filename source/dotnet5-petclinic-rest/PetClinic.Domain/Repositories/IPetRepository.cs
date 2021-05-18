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
    public interface IPetRepository : IRepository<IPet, Pet>
    {
        Task<IPet> FindByIdAsync(int id, CancellationToken cancellationToken = default);
        Task<List<IPet>> FindByIdsAsync(int[] ids, CancellationToken cancellationToken = default);
    }
}