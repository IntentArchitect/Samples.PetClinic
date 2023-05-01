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

    public class PetTypeDTO : IMapFrom<PetType>
    {
        public PetTypeDTO()
        {
        }

        public static PetTypeDTO Create(int? id, string name)
        {
            return new PetTypeDTO
            {
                Id = id,
                Name = name
            };
        }

        public int? Id { get; set; }

        public string Name { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<PetType, PetTypeDTO>()
                .ForMember(d => d.Id, opt => opt.MapFrom(src => (int?)src.Id));
        }
    }
}