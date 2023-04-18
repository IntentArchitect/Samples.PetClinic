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

namespace PetClinic.Application.Owners.GetOwners
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetOwnersQueryHandler : IRequestHandler<GetOwnersQuery, List<OwnerDto>>
    {
        private readonly IOwnerRepository _ownerRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetOwnersQueryHandler(IOwnerRepository ownerRepository, IMapper mapper)
        {
            _ownerRepository = ownerRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<List<OwnerDto>> Handle(GetOwnersQuery request, CancellationToken cancellationToken)
        {
            var owners = await _ownerRepository.FindAllAsync(cancellationToken);
            return owners.MapToOwnerDtoList(_mapper);
        }
    }
}