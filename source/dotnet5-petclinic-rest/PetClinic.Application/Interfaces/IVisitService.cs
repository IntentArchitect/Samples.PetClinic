using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;


[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Contracts.ServiceContract", Version = "1.0")]

namespace PetClinic.Application.Interfaces
{

    public interface IVisitService : IDisposable
    {

        Task<PetVisitDTO> GetVisit(int visitId);

        Task AddVisit(VisitCreateDTO dto);

        Task UpdateVisit(int visitId, VisitUpdateDTO dto);

        Task DeleteVisit(int visitId);

    }
}