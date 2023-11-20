using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Visits
{
    public static class VisitDtoMappingExtensions
    {
        public static VisitDto MapToVisitDto(this Visit projectFrom, IMapper mapper)
            => mapper.Map<VisitDto>(projectFrom);

        public static List<VisitDto> MapToVisitDtoList(this IEnumerable<Visit> projectFrom, IMapper mapper)
            => projectFrom.Select(x => x.MapToVisitDto(mapper)).ToList();
    }
}