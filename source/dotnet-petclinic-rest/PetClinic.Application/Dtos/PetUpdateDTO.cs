using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class PetUpdateDTO
    {
        public PetUpdateDTO()
        {
        }

        public static PetUpdateDTO Create(string name, DateTime birthDate, int petTypeId)
        {
            return new PetUpdateDTO
            {
                Name = name,
                BirthDate = birthDate,
                PetTypeId = petTypeId
            };
        }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

    }
}