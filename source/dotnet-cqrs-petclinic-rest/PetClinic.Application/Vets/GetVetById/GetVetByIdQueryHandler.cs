using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryHandler", Version = "1.0")]

namespace PetClinic.Application.Vets.GetVetById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVetByIdQueryHandler : IRequestHandler<GetVetByIdQuery, VetDto>
    {
        private readonly IVetRepository _vetRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetVetByIdQueryHandler(IVetRepository vetRepository, IMapper mapper)
        {
            _vetRepository = vetRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<VetDto> Handle(GetVetByIdQuery request, CancellationToken cancellationToken)
        {
            var vet = await _vetRepository.FindByIdAsync(request.Id, cancellationToken);
            return vet.MapToVetDto(_mapper);
        }
    }
}