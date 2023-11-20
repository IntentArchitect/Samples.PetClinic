using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Common.Exceptions;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "2.0")]

namespace PetClinic.Application.Pets.UpdatePet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdatePetCommandHandler : IRequestHandler<UpdatePetCommand>
    {
        private readonly IPetRepository _petRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdatePetCommandHandler(IPetRepository petRepository)
        {
            _petRepository = petRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task Handle(UpdatePetCommand request, CancellationToken cancellationToken)
        {
            var existingPet = await _petRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingPet is null)
            {
                throw new NotFoundException($"Could not find Pet '{request.Id}'");
            }

            existingPet.Name = request.Name;
            existingPet.BirthDate = request.BirthDate;
            existingPet.PetTypeId = request.PetTypeId;

        }
    }
}