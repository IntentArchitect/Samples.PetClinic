using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Owners.UpdateOwner
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateOwnerCommandHandler : IRequestHandler<UpdateOwnerCommand>
    {
        private readonly IOwnerRepository _ownerRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdateOwnerCommandHandler(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(UpdateOwnerCommand request, CancellationToken cancellationToken)
        {
            var existingOwner = await _ownerRepository.FindByIdAsync(request.Id, cancellationToken);
            existingOwner.FirstName = request.FirstName;
            existingOwner.LastName = request.LastName;
            existingOwner.Address = request.Address;
            existingOwner.City = request.City;
            existingOwner.Telephone = request.Telephone;
            return Unit.Value;
        }
    }
}