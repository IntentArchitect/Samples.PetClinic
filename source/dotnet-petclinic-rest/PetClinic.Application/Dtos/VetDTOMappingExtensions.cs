using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Dtos
{
    public static class VetDTOMappingExtensions
    {
        public static VetDTO MapToVetDTO(this Vet projectFrom, IMapper mapper)
        {
            return mapper.Map<VetDTO>(projectFrom);
        }

        public static List<VetDTO> MapToVetDTOList(this IEnumerable<Vet> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToVetDTO(mapper)).ToList();
        }
    }
}