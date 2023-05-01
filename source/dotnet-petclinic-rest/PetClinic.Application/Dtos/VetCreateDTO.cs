using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class VetCreateDTO
    {
        public VetCreateDTO()
        {
        }

        public static VetCreateDTO Create(string firstName, string lastName, IEnumerable<int> specialties)
        {
            return new VetCreateDTO
            {
                FirstName = firstName,
                LastName = lastName,
                Specialties = specialties
            };
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public IEnumerable<int> Specialties { get; set; }

    }
}