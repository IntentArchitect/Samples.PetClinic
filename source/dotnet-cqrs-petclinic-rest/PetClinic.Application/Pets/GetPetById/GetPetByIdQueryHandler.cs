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

namespace PetClinic.Application.Pets.GetPetById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetByIdQueryHandler : IRequestHandler<GetPetByIdQuery, PetDto>
    {
        private readonly IPetRepository _petRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetPetByIdQueryHandler(IPetRepository petRepository, IMapper mapper)
        {
            _petRepository = petRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<PetDto> Handle(GetPetByIdQuery request, CancellationToken cancellationToken)
        {
            var pet = await _petRepository.FindByIdAsync(request.Id, cancellationToken);
            if (pet is null)
            {
                throw new NotFoundException($"Could not find Pet '{request.Id}'");
            }

            return pet.MapToPetDto(_mapper);
        }
    }
}