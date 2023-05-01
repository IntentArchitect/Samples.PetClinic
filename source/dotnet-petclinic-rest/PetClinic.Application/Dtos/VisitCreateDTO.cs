using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class VisitCreateDTO
    {
        public VisitCreateDTO()
        {
        }

        public static VisitCreateDTO Create(int petId, DateTime visitDate, string description)
        {
            return new VisitCreateDTO
            {
                PetId = petId,
                VisitDate = visitDate,
                Description = description
            };
        }

        public int PetId { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

    }
}