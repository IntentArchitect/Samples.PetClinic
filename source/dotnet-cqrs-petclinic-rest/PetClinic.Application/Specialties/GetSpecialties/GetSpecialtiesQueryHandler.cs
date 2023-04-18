using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryHandler", Version = "1.0")]

namespace PetClinic.Application.Specialties.GetSpecialties
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetSpecialtiesQueryHandler : IRequestHandler<GetSpecialtiesQuery, List<SpecialtyDto>>
    {
        private readonly ISpecialtyRepository _specialtyRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetSpecialtiesQueryHandler(ISpecialtyRepository specialtyRepository, IMapper mapper)
        {
            _specialtyRepository = specialtyRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<List<SpecialtyDto>> Handle(GetSpecialtiesQuery request, CancellationToken cancellationToken)
        {
            var specialties = await _specialtyRepository.FindAllAsync(cancellationToken);
            return specialties.MapToSpecialtyDtoList(_mapper);
        }
    }
}