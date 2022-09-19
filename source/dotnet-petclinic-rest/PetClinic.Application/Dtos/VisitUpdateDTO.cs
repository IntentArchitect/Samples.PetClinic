using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class VisitUpdateDTO
    {
        public VisitUpdateDTO()
        {
        }

        public static VisitUpdateDTO Create(
            DateTime visitDate,
            string description)
        {
            return new VisitUpdateDTO
            {
                VisitDate = visitDate,
                Description = description,
            };
        }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

    }
}