using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class OwnerUpdateDTO
    {
        public OwnerUpdateDTO()
        {
        }

        public static OwnerUpdateDTO Create(
            string firstName,
            string lastName,
            string address,
            string city,
            string telephone)
        {
            return new OwnerUpdateDTO
            {
                FirstName = firstName,
                LastName = lastName,
                Address = address,
                City = city,
                Telephone = telephone,
            };
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Telephone { get; set; }

    }
}