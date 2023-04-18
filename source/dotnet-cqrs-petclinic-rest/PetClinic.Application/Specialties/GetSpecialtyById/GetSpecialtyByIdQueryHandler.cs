using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryHandler", Version = "1.0")]

namespace PetClinic.Application.Specialties.GetSpecialtyById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetSpecialtyByIdQueryHandler : IRequestHandler<GetSpecialtyByIdQuery, SpecialtyDto>
    {
        private readonly ISpecialtyRepository _specialtyRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetSpecialtyByIdQueryHandler(ISpecialtyRepository specialtyRepository, IMapper mapper)
        {
            _specialtyRepository = specialtyRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<SpecialtyDto> Handle(GetSpecialtyByIdQuery request, CancellationToken cancellationToken)
        {
            var specialty = await _specialtyRepository.FindByIdAsync(request.Id, cancellationToken);
            return specialty.MapToSpecialtyDto(_mapper);
        }
    }
}