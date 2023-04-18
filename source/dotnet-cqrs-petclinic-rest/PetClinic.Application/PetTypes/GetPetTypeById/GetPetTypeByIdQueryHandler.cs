using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryHandler", Version = "1.0")]

namespace PetClinic.Application.PetTypes.GetPetTypeById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetTypeByIdQueryHandler : IRequestHandler<GetPetTypeByIdQuery, PetTypeDto>
    {
        private readonly IPetTypeRepository _petTypeRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetPetTypeByIdQueryHandler(IPetTypeRepository petTypeRepository, IMapper mapper)
        {
            _petTypeRepository = petTypeRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<PetTypeDto> Handle(GetPetTypeByIdQuery request, CancellationToken cancellationToken)
        {
            var petType = await _petTypeRepository.FindByIdAsync(request.Id, cancellationToken);
            return petType.MapToPetTypeDto(_mapper);
        }
    }
}