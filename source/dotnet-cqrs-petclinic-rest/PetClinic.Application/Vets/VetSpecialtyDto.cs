using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Vets
{
    public class VetSpecialtyDto : IMapFrom<Specialty>
    {
        public VetSpecialtyDto()
        {
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public static VetSpecialtyDto Create(int id, string name)
        {
            return new VetSpecialtyDto
            {
                Id = id,
                Name = name,
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Specialty, VetSpecialtyDto>();
        }
    }
}