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

    public class VetDTO : IMapFrom<Vet>
    {
        public VetDTO()
        {
        }

        public static VetDTO Create(int id, string firstName, string lastName, List<SpecialtyDTO> specialties)
        {
            return new VetDTO
            {
                Id = id,
                FirstName = firstName,
                LastName = lastName,
                Specialties = specialties,
            };
        }

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public List<SpecialtyDTO> Specialties { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Vet, VetDTO>()
                .ForMember(d => d.Specialties, opt => opt.MapFrom(src => src.Specialties));
        }
    }
}