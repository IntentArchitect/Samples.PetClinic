using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Visits.UpdateVisit
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateVisitCommandHandler : IRequestHandler<UpdateVisitCommand>
    {
        private readonly IVisitRepository _visitRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdateVisitCommandHandler(IVisitRepository visitRepository)
        {
            _visitRepository = visitRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(UpdateVisitCommand request, CancellationToken cancellationToken)
        {
            var existingVisit = await _visitRepository.FindByIdAsync(request.Id, cancellationToken);
            existingVisit.VisitDate = request.VisitDate;
            existingVisit.Description = request.Description;
            return Unit.Value;
        }
    }
}