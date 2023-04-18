using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Specialties
{
    public class SpecialtyDto : IMapFrom<Specialty>
    {
        public SpecialtyDto()
        {
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public static SpecialtyDto Create(int id, string name)
        {
            return new SpecialtyDto
            {
                Id = id,
                Name = name,
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Specialty, SpecialtyDto>();
        }
    }
}