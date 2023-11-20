using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

namespace PetClinic.Application.Pets.DeletePet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeletePetCommandHandler : IRequestHandler<DeletePetCommand>
    {
        private readonly IPetRepository _petRepository;

        [IntentManaged(Mode.Ignore)]
        public DeletePetCommandHandler(IPetRepository petRepository)
        {
            _petRepository = petRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task Handle(DeletePetCommand request, CancellationToken cancellationToken)
        {
            var existingPet = await _petRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingPet is null)
            {
                throw new NotFoundException($"Could not find Pet '{request.Id}'");
            }

            _petRepository.Remove(existingPet);

        }
    }
}