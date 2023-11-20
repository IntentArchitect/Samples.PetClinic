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

namespace PetClinic.Application.Visits.GetVisitById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVisitByIdQueryHandler : IRequestHandler<GetVisitByIdQuery, VisitDto>
    {
        private readonly IVisitRepository _visitRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Ignore)]
        public GetVisitByIdQueryHandler(IVisitRepository visitRepository, IMapper mapper)
        {
            _visitRepository = visitRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<VisitDto> Handle(GetVisitByIdQuery request, CancellationToken cancellationToken)
        {
            var visit = await _visitRepository.FindByIdAsync(request.Id, cancellationToken);
            if (visit is null)
            {
                throw new NotFoundException($"Could not find Visit '{request.Id}'");
            }

            return visit.MapToVisitDto(_mapper);
        }
    }
}