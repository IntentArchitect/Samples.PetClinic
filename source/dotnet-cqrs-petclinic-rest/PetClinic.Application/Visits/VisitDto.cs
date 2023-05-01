using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Visits
{
    public class VisitDto : IMapFrom<Visit>
    {
        public VisitDto()
        {
        }

        public int Id { get; set; }
        public DateTime VisitDate { get; set; }
        public string Description { get; set; }
        public int? PetId { get; set; }

        public static VisitDto Create(int id, DateTime visitDate, string description, int? petId)
        {
            return new VisitDto
            {
                Id = id,
                VisitDate = visitDate,
                Description = description,
                PetId = petId
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Visit, VisitDto>();
        }
    }
}