using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;


[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace PetClinic.Application.Interfaces
{

    public interface IVetService : IDisposable
    {

        Task<List<VetDTO>> GetAllVets();

        Task<VetDTO> GetVet(int vetId);

        Task AddVet(VetCreateDTO dto);

        Task UpdateVet(int vetId, VetUpdateDTO dto);

        Task DeleteVet(int vetId);

    }
}