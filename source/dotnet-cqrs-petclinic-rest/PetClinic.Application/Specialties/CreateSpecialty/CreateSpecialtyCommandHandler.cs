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

namespace PetClinic.Application.Specialties.CreateSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateSpecialtyCommandHandler : IRequestHandler<CreateSpecialtyCommand, int>
    {
        private readonly ISpecialtyRepository _specialtyRepository;

        [IntentManaged(Mode.Ignore)]
        public CreateSpecialtyCommandHandler(ISpecialtyRepository specialtyRepository)
        {
            _specialtyRepository = specialtyRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<int> Handle(CreateSpecialtyCommand request, CancellationToken cancellationToken)
        {
            var newSpecialty = new Specialty
            {
                Name = request.Name,
            };

            _specialtyRepository.Add(newSpecialty);
            await _specialtyRepository.UnitOfWork.SaveChangesAsync(cancellationToken);
            return newSpecialty.Id;
        }
    }
}