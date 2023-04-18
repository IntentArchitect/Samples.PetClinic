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

namespace PetClinic.Application.Owners.CreateOwner
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateOwnerCommandHandler : IRequestHandler<CreateOwnerCommand, int>
    {
        private readonly IOwnerRepository _ownerRepository;

        [IntentManaged(Mode.Ignore)]
        public CreateOwnerCommandHandler(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreateOwnerCommand request, CancellationToken cancellationToken)
        {
            var newOwner = new Owner
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Address = request.Address,
                City = request.City,
                Telephone = request.Telephone,
            };

            _ownerRepository.Add(newOwner);
            await _ownerRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newOwner.Id;
        }
    }
}