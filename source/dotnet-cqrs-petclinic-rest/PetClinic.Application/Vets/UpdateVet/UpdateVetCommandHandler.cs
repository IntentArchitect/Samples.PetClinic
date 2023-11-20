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

namespace PetClinic.Application.Vets.UpdateVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateVetCommandHandler : IRequestHandler<UpdateVetCommand>
    {
        private readonly IVetRepository _vetRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdateVetCommandHandler(IVetRepository vetRepository)
        {
            _vetRepository = vetRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task Handle(UpdateVetCommand request, CancellationToken cancellationToken)
        {
            var existingVet = await _vetRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingVet is null)
            {
                throw new NotFoundException($"Could not find Vet '{request.Id}'");
            }

            existingVet.FirstName = request.FirstName;
            existingVet.LastName = request.LastName;

        }
    }
}