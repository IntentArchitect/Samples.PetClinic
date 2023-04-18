using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.PetTypes.CreatePetType
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreatePetTypeCommandHandler : IRequestHandler<CreatePetTypeCommand, int>
    {
        private readonly IPetTypeRepository _petTypeRepository;

        [IntentManaged(Mode.Ignore)]
        public CreatePetTypeCommandHandler(IPetTypeRepository petTypeRepository)
        {
            _petTypeRepository = petTypeRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreatePetTypeCommand request, CancellationToken cancellationToken)
        {
            var newPetType = new PetType
            {
                Name = request.Name,
            };

            _petTypeRepository.Add(newPetType);
            await _petTypeRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newPetType.Id;
        }
    }
}