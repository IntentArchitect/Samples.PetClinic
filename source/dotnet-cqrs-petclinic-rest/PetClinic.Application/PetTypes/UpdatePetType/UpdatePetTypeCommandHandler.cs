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

namespace PetClinic.Application.PetTypes.UpdatePetType
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdatePetTypeCommandHandler : IRequestHandler<UpdatePetTypeCommand>
    {
        private readonly IPetTypeRepository _petTypeRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdatePetTypeCommandHandler(IPetTypeRepository petTypeRepository)
        {
            _petTypeRepository = petTypeRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task Handle(UpdatePetTypeCommand request, CancellationToken cancellationToken)
        {
            var existingPetType = await _petTypeRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingPetType is null)
            {
                throw new NotFoundException($"Could not find PetType '{request.Id}'");
            }

            existingPetType.Name = request.Name;

        }
    }
}