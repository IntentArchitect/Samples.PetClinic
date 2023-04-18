using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Specialties.UpdateSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateSpecialtyCommandHandler : IRequestHandler<UpdateSpecialtyCommand>
    {
        private readonly ISpecialtyRepository _specialtyRepository;

        [IntentManaged(Mode.Ignore)]
        public UpdateSpecialtyCommandHandler(ISpecialtyRepository specialtyRepository)
        {
            _specialtyRepository = specialtyRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(UpdateSpecialtyCommand request, CancellationToken cancellationToken)
        {
            var existingSpecialty = await _specialtyRepository.FindByIdAsync(request.Id, cancellationToken);
            existingSpecialty.Name = request.Name;
            return Unit.Value;
        }
    }
}