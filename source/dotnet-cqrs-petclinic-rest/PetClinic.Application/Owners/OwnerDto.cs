using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Application.Pets;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Owners
{
    public class OwnerDto : IMapFrom<Owner>
    {
        public OwnerDto()
        {
            FirstName = null!;
            LastName = null!;
            Address = null!;
            City = null!;
            Telephone = null!;
            Pets = null!;
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Telephone { get; set; }
        public List<PetDto> Pets { get; set; }

        public static OwnerDto Create(
            int id,
            string firstName,
            string lastName,
            string address,
            string city,
            string telephone,
            List<PetDto> pets)
        {
            return new OwnerDto
            {
                Id = id,
                FirstName = firstName,
                LastName = lastName,
                Address = address,
                City = city,
                Telephone = telephone,
                Pets = pets
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Owner, OwnerDto>()
                .ForMember(d => d.Pets, opt => opt.MapFrom(src => src.Pets));
        }
    }
}