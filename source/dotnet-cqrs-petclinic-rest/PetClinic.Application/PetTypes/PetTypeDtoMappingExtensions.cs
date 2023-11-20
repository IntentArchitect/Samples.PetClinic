using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.PetTypes
{
    public static class PetTypeDtoMappingExtensions
    {
        public static PetTypeDto MapToPetTypeDto(this PetType projectFrom, IMapper mapper)
            => mapper.Map<PetTypeDto>(projectFrom);

        public static List<PetTypeDto> MapToPetTypeDtoList(this IEnumerable<PetType> projectFrom, IMapper mapper)
            => projectFrom.Select(x => x.MapToPetTypeDto(mapper)).ToList();
    }
}