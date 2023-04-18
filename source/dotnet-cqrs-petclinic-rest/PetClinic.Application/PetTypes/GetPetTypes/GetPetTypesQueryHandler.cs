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

namespace PetClinic.Application.PetTypes.GetPetTypes
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetTypesQueryHandler : IRequestHandler<GetPetTypesQuery, List<PetTypeDto>>
    {
        private readonly IPetTypeRepository _petTypeRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetPetTypesQueryHandler(IPetTypeRepository petTypeRepository, IMapper mapper)
        {
            _petTypeRepository = petTypeRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<List<PetTypeDto>> Handle(GetPetTypesQuery request, CancellationToken cancellationToken)
        {
            var petTypes = await _petTypeRepository.FindAllAsync(cancellationToken);
            return petTypes.MapToPetTypeDtoList(_mapper);
        }
    }
}