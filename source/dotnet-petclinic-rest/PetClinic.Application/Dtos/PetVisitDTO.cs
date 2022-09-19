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

    public class PetVisitDTO : IMapFrom<Visit>
    {
        public PetVisitDTO()
        {
        }

        public static PetVisitDTO Create(
            int id,
            DateTime visitDate,
            string description)
        {
            return new PetVisitDTO
            {
                Id = id,
                VisitDate = visitDate,
                Description = description,
            };
        }

        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Visit, PetVisitDTO>();
        }
    }
}