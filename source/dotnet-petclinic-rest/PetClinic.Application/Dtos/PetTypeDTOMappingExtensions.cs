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
    public static class PetTypeDTOMappingExtensions
    {
        public static PetTypeDTO MapToPetTypeDTO(this PetType projectFrom, IMapper mapper)
        {
            return mapper.Map<PetTypeDTO>(projectFrom);
        }

        public static List<PetTypeDTO> MapToPetTypeDTOList(this IEnumerable<PetType> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToPetTypeDTO(mapper)).ToList();
        }
    }
}