using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

namespace PetClinic.Application.Visits.CreateVisit
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateVisitCommandHandler : IRequestHandler<CreateVisitCommand, int>
    {
        private readonly IVisitRepository _visitRepository;

        [IntentManaged(Mode.Ignore)]
        public CreateVisitCommandHandler(IVisitRepository visitRepository)
        {
            _visitRepository = visitRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreateVisitCommand request, CancellationToken cancellationToken)
        {
            var newVisit = new Visit
            {
                PetId = request.PetId,
                VisitDate = request.VisitDate,
                Description = request.Description,
            };

            _visitRepository.Add(newVisit);
            await _visitRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newVisit.Id;
        }
    }
}