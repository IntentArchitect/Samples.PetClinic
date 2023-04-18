using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Visits.DeleteVisit
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteVisitCommandHandler : IRequestHandler<DeleteVisitCommand>
    {
        private readonly IVisitRepository _visitRepository;

        [IntentManaged(Mode.Ignore)]
        public DeleteVisitCommandHandler(IVisitRepository visitRepository)
        {
            _visitRepository = visitRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(DeleteVisitCommand request, CancellationToken cancellationToken)
        {
            var existingVisit = await _visitRepository.FindByIdAsync(request.Id, cancellationToken);
            _visitRepository.Remove(existingVisit);
            return Unit.Value;
        }
    }
}