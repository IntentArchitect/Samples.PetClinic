using System;
using System.Collections.Generic;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Common.Mappings;
using PetClinic.Application.Visits;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.DtoModel", Version = "1.0")]

namespace PetClinic.Application.Pets
{
    public class PetDto : IMapFrom<Pet>
    {
        public PetDto()
        {
            Name = null!;
            PetTypeName = null!;
            OwnerFirstName = null!;
            OwnerLastName = null!;
            Visits = null!;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public int PetTypeId { get; set; }
        public string PetTypeName { get; set; }
        public int? OwnerId { get; set; }
        public string OwnerFirstName { get; set; }
        public string OwnerLastName { get; set; }
        public List<VisitDto> Visits { get; set; }

        public static PetDto Create(
            int id,
            string name,
            DateTime birthDate,
            int petTypeId,
            string petTypeName,
            int? ownerId,
            string ownerFirstName,
            string ownerLastName,
            List<VisitDto> visits)
        {
            return new PetDto
            {
                Id = id,
                Name = name,
                BirthDate = birthDate,
                PetTypeId = petTypeId,
                PetTypeName = petTypeName,
                OwnerId = ownerId,
                OwnerFirstName = ownerFirstName,
                OwnerLastName = ownerLastName,
                Visits = visits
            };
        }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Pet, PetDto>()
                .ForMember(d => d.PetTypeName, opt => opt.MapFrom(src => src.PetType.Name))
                .ForMember(d => d.OwnerFirstName, opt => opt.MapFrom(src => src.Owner.FirstName))
                .ForMember(d => d.OwnerLastName, opt => opt.MapFrom(src => src.Owner.LastName))
                .ForMember(d => d.Visits, opt => opt.MapFrom(src => src.Visits));
        }
    }
}