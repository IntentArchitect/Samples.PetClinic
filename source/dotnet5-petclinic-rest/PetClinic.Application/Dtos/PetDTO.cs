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

    public class PetDTO : IMapFrom<Pet>
    {
        public PetDTO()
        {
        }

        public static PetDTO Create(
            int id,
            string name,
            DateTime birthDate,
            int petTypeId,
            string petTypeName,
            int ownerId,
            string ownerFirstName,
            string ownerLastName,
            List<PetVisitDTO> visits)
        {
            return new PetDTO
            {
                Id = id,
                Name = name,
                BirthDate = birthDate,
                PetTypeId = petTypeId,
                PetTypeName = petTypeName,
                OwnerId = ownerId,
                OwnerFirstName = ownerFirstName,
                OwnerLastName = ownerLastName,
                Visits = visits,
            };
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

        public string PetTypeName { get; set; }

        public int OwnerId { get; set; }

        public string OwnerFirstName { get; set; }

        public string OwnerLastName { get; set; }

        public List<PetVisitDTO> Visits { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Pet, PetDTO>()
                .ForMember(d => d.PetTypeId, opt => opt.MapFrom(src => src.PetType.Id))
                .ForMember(d => d.PetTypeName, opt => opt.MapFrom(src => src.PetType.Name))
                .ForMember(d => d.OwnerId, opt => opt.MapFrom(src => src.Owner.Id))
                .ForMember(d => d.OwnerFirstName, opt => opt.MapFrom(src => src.Owner.FirstName))
                .ForMember(d => d.OwnerLastName, opt => opt.MapFrom(src => src.Owner.LastName));
        }
    }
}