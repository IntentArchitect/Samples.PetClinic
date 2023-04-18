using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Vets.DeleteVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteVetCommandHandler : IRequestHandler<DeleteVetCommand>
    {
        private readonly IVetRepository _vetRepository;

        [IntentManaged(Mode.Ignore)]
        public DeleteVetCommandHandler(IVetRepository vetRepository)
        {
            _vetRepository = vetRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(DeleteVetCommand request, CancellationToken cancellationToken)
        {
            var existingVet = await _vetRepository.FindByIdAsync(request.Id, cancellationToken);
            _vetRepository.Remove(existingVet);
            return Unit.Value;
        }
    }
}