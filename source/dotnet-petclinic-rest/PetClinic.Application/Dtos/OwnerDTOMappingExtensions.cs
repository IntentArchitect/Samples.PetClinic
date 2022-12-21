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
    public static class OwnerDTOMappingExtensions
    {
        public static OwnerDTO MapToOwnerDTO(this Owner projectFrom, IMapper mapper)
        {
            return mapper.Map<OwnerDTO>(projectFrom);
        }

        public static List<OwnerDTO> MapToOwnerDTOList(this IEnumerable<Owner> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToOwnerDTO(mapper)).ToList();
        }
    }
}