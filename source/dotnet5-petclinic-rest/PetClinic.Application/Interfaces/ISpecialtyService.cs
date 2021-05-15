using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;


[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace PetClinic.Application.Interfaces
{

    public interface ISpecialtyService : IDisposable
    {

        Task<List<SpecialtyDTO>> GetAllSpecialties();

        Task<SpecialtyDTO> GetSpecialty(int specialtyId);

        Task<int> AddSpecialty(SpecialtyDTO dto);

        Task UpdateSpecialty(int specialtyId, SpecialtyDTO dto);

        Task DeleteSpecialty(int specialtyId);

    }
}