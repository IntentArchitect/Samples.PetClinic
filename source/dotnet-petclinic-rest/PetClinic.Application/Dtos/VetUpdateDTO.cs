using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class VetUpdateDTO
    {
        public VetUpdateDTO()
        {
        }

        public static VetUpdateDTO Create(
            string firstName,
            string lastName,
            IEnumerable<int> specialties)
        {
            return new VetUpdateDTO
            {
                FirstName = firstName,
                LastName = lastName,
                Specialties = specialties,
            };
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IEnumerable<int> Specialties { get; set; }

    }
}