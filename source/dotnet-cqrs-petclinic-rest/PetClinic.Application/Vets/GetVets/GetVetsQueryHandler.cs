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

namespace PetClinic.Application.Vets.GetVets
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVetsQueryHandler : IRequestHandler<GetVetsQuery, List<VetDto>>
    {
        private readonly IVetRepository _vetRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetVetsQueryHandler(IVetRepository vetRepository, IMapper mapper)
        {
            _vetRepository = vetRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<List<VetDto>> Handle(GetVetsQuery request, CancellationToken cancellationToken)
        {
            var vets = await _vetRepository.FindAllAsync(cancellationToken);
            return vets.MapToVetDtoList(_mapper);
        }
    }
}