using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.Dtos.AutoMapper.MappingExtensions", Version = "1.0")]

namespace PetClinic.Application.Vets
{
    public static class VetDtoMappingExtensions
    {
        public static VetDto MapToVetDto(this Vet projectFrom, IMapper mapper)
            => mapper.Map<VetDto>(projectFrom);

        public static List<VetDto> MapToVetDtoList(this IEnumerable<Vet> projectFrom, IMapper mapper)
            => projectFrom.Select(x => x.MapToVetDto(mapper)).ToList();
    }
}