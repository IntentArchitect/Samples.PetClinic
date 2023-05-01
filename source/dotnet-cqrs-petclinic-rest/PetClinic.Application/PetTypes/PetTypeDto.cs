using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.PetTypes
{
    public class PetTypeDto : IMapFrom<PetType>
    {
        public PetTypeDto()
        {
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public static PetTypeDto Create(int id, string name)
        {
            return new PetTypeDto
            {
                Id = id,
                Name = name
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<PetType, PetTypeDto>();
        }
    }
}