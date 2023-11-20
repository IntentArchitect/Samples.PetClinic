using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

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
        public async Task Handle(DeleteVisitCommand request, CancellationToken cancellationToken)
        {
            var existingVisit = await _visitRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingVisit is null)
            {
                throw new NotFoundException($"Could not find Visit '{request.Id}'");
            }

            _visitRepository.Remove(existingVisit);

        }
    }
}