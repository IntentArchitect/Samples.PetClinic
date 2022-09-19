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

    public class VisitDTO : IMapFrom<Visit>
    {
        public VisitDTO()
        {
        }

        public static VisitDTO Create(
            int id,
            DateTime visitDate,
            string description,
            PetDTO pet,
            int ownerId)
        {
            return new VisitDTO
            {
                Id = id,
                VisitDate = visitDate,
                Description = description,
                Pet = pet,
                OwnerId = ownerId,
            };
        }

        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

        public PetDTO Pet { get; set; }

        public int OwnerId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Visit, VisitDTO>()
                .ForMember(d => d.OwnerId, opt => opt.MapFrom(src => src.Pet.Owner.Id));
        }
    }
}