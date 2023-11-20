using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Specialties
{
    public static class SpecialtyDtoMappingExtensions
    {
        public static SpecialtyDto MapToSpecialtyDto(this Specialty projectFrom, IMapper mapper)
            => mapper.Map<SpecialtyDto>(projectFrom);

        public static List<SpecialtyDto> MapToSpecialtyDtoList(this IEnumerable<Specialty> projectFrom, IMapper mapper)
            => projectFrom.Select(x => x.MapToSpecialtyDto(mapper)).ToList();
    }
}