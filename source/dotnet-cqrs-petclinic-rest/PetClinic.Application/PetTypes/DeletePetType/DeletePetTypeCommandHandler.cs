using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

namespace PetClinic.Application.PetTypes.DeletePetType
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeletePetTypeCommandHandler : IRequestHandler<DeletePetTypeCommand>
    {
        private readonly IPetTypeRepository _petTypeRepository;

        [IntentManaged(Mode.Ignore)]
        public DeletePetTypeCommandHandler(IPetTypeRepository petTypeRepository)
        {
            _petTypeRepository = petTypeRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task Handle(DeletePetTypeCommand request, CancellationToken cancellationToken)
        {
            var existingPetType = await _petTypeRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingPetType is null)
            {
                throw new NotFoundException($"Could not find PetType '{request.Id}'");
            }

            _petTypeRepository.Remove(existingPetType);

        }
    }
}