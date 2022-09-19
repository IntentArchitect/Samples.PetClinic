using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class PetCreateDTO
    {
        public PetCreateDTO()
        {
        }

        public static PetCreateDTO Create(
            int ownerId,
            string name,
            DateTime birthDate,
            int petTypeId)
        {
            return new PetCreateDTO
            {
                OwnerId = ownerId,
                Name = name,
                BirthDate = birthDate,
                PetTypeId = petTypeId,
            };
        }

        public int OwnerId { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

    }
}