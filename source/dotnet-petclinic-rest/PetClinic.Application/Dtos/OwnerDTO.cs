using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Dtos
{

    public class OwnerDTO : IMapFrom<Owner>
    {
        public OwnerDTO()
        {
        }

        public static OwnerDTO Create(
            int id,
            string firstName,
            string lastName,
            string address,
            string city,
            string telephone,
            List<PetDTO> pets)
        {
            return new OwnerDTO
            {
                Id = id,
                FirstName = firstName,
                LastName = lastName,
                Address = address,
                City = city,
                Telephone = telephone,
                Pets = pets,
            };
        }

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Telephone { get; set; }

        public List<PetDTO> Pets { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Owner, OwnerDTO>();
        }
    }
}