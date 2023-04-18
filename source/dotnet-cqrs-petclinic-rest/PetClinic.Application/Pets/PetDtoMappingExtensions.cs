using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Pets
{
    public static class PetDtoMappingExtensions
    {
        public static PetDto MapToPetDto(this Pet projectFrom, IMapper mapper)
        {
            return mapper.Map<PetDto>(projectFrom);
        }

        public static List<PetDto> MapToPetDtoList(this IEnumerable<Pet> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToPetDto(mapper)).ToList();
        }
    }
}