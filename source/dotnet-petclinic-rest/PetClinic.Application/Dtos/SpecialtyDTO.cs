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

    public class SpecialtyDTO : IMapFrom<Specialty>
    {
        public SpecialtyDTO()
        {
        }

        public static SpecialtyDTO Create(
            int? id,
            string name)
        {
            return new SpecialtyDTO
            {
                Id = id,
                Name = name,
            };
        }

        public int? Id { get; set; }

        public string Name { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Specialty, SpecialtyDTO>();
        }
    }
}