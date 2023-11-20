using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

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
        public async Task Handle(DeleteVetCommand request, CancellationToken cancellationToken)
        {
            var existingVet = await _vetRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingVet is null)
            {
                throw new NotFoundException($"Could not find Vet '{request.Id}'");
            }

            _vetRepository.Remove(existingVet);

        }
    }
}