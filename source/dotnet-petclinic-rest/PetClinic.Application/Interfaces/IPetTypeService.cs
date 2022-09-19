using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace PetClinic.Application.Interfaces
{

    public interface IPetTypeService : IDisposable
    {

        Task<List<PetTypeDTO>> GetAllPetTypes();

        Task<PetTypeDTO> GetPetType(int petTypeId);

        Task<int> AddPetType(PetTypeDTO dto);

        Task UpdatePetType(int petTypeId, PetTypeDTO dto);

        Task DeletePetType(int petTypeId);

    }
}