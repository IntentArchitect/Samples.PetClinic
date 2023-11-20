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

namespace PetClinic.Application.Pets.CreatePet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreatePetCommandHandler : IRequestHandler<CreatePetCommand, int>
    {
        private readonly IPetRepository _petRepository;

        [IntentManaged(Mode.Ignore)]
        public CreatePetCommandHandler(IPetRepository petRepository)
        {
            _petRepository = petRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreatePetCommand request, CancellationToken cancellationToken)
        {
            var newPet = new Pet
            {
                Name = request.Name,
                BirthDate = request.BirthDate,
                PetTypeId = request.PetTypeId,
                OwnerId = request.OwnerId,
            };

            _petRepository.Add(newPet);
            await _petRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newPet.Id;
        }
    }
}