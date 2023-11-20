using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Owners
{
    public static class OwnerDtoMappingExtensions
    {
        public static OwnerDto MapToOwnerDto(this Owner projectFrom, IMapper mapper)
            => mapper.Map<OwnerDto>(projectFrom);

        public static List<OwnerDto> MapToOwnerDtoList(this IEnumerable<Owner> projectFrom, IMapper mapper)
            => projectFrom.Select(x => x.MapToOwnerDto(mapper)).ToList();
    }
}