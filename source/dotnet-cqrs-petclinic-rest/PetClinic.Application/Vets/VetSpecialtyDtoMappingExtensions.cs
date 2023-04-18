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
    public static class VetSpecialtyDtoMappingExtensions
    {
        public static VetSpecialtyDto MapToVetSpecialtyDto(this Specialty projectFrom, IMapper mapper)
        {
            return mapper.Map<VetSpecialtyDto>(projectFrom);
        }

        public static List<VetSpecialtyDto> MapToVetSpecialtyDtoList(this IEnumerable<Specialty> projectFrom, IMapper mapper)
        {
            return projectFrom.Select(x => x.MapToVetSpecialtyDto(mapper)).ToList();
        }
    }
}