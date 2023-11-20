using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryHandler", Version = "1.0")]

namespace PetClinic.Application.Owners.GetOwnerById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetOwnerByIdQueryHandler : IRequestHandler<GetOwnerByIdQuery, OwnerDto>
    {
        private readonly IOwnerRepository _ownerRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetOwnerByIdQueryHandler(IOwnerRepository ownerRepository, IMapper mapper)
        {
            _ownerRepository = ownerRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<OwnerDto> Handle(GetOwnerByIdQuery request, CancellationToken cancellationToken)
        {
            var owner = await _ownerRepository.FindByIdAsync(request.Id, cancellationToken);
            if (owner is null)
            {
                throw new NotFoundException($"Could not find Owner '{request.Id}'");
            }

            return owner.MapToOwnerDto(_mapper);
        }
    }
}