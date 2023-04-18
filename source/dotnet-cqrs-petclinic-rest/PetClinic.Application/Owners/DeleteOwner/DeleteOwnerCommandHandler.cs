using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Owners.DeleteOwner
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteOwnerCommandHandler : IRequestHandler<DeleteOwnerCommand>
    {
        private readonly IOwnerRepository _ownerRepository;

        [IntentManaged(Mode.Ignore)]
        public DeleteOwnerCommandHandler(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(DeleteOwnerCommand request, CancellationToken cancellationToken)
        {
            var existingOwner = await _ownerRepository.FindByIdAsync(request.Id, cancellationToken);
            _ownerRepository.Remove(existingOwner);
            return Unit.Value;
        }
    }
}