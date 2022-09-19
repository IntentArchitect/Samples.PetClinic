using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace PetClinic.Application.Interfaces
{

    public interface IOwnerService : IDisposable
    {

        Task<List<OwnerDTO>> GetOwners();

        Task AddOwner(OwnerCreateDTO dto);

        Task<OwnerDTO> GetOwner(int ownerId);

        Task UpdateOwner(int ownerId, OwnerUpdateDTO dto);

        Task DeleteOwner(int ownerId);

        Task<List<OwnerDTO>> GetOwnersList(string lastName);

    }
}