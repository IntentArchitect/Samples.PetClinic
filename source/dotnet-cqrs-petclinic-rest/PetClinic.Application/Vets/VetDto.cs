using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Application.Specialties;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Vets
{
    public class VetDto : IMapFrom<Vet>
    {
        public VetDto()
        {
            FirstName = null!;
            LastName = null!;
            Specialties = null!;
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<SpecialtyDto> Specialties { get; set; }

        public static VetDto Create(int id, string firstName, string lastName, List<SpecialtyDto> specialties)
        {
            return new VetDto
            {
                Id = id,
                FirstName = firstName,
                LastName = lastName,
                Specialties = specialties
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Vet, VetDto>()
                .ForMember(d => d.Specialties, opt => opt.MapFrom(src => src.Specialties));
        }
    }
}