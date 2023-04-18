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

namespace PetClinic.Application.Vets.CreateVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateVetCommandHandler : IRequestHandler<CreateVetCommand, int>
    {
        private readonly IVetRepository _vetRepository;

        [IntentManaged(Mode.Ignore)]
        public CreateVetCommandHandler(IVetRepository vetRepository)
        {
            _vetRepository = vetRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreateVetCommand request, CancellationToken cancellationToken)
        {
            var newVet = new Vet
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
            };

            _vetRepository.Add(newVet);
            await _vetRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newVet.Id;
        }
    }
}