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
    public static class PetDTOMappingExtensions
    {
        public static PetDTO MapToPetDTO(this Pet projectFrom, IMapper mapper)
        {
            return mapper.Map<PetDTO>(projectFrom);
        }

        public static List<PetDTO> MapToPetDTOList(this IEnumerable<Pet> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToPetDTO(mapper)).ToList();
        }
    }
}