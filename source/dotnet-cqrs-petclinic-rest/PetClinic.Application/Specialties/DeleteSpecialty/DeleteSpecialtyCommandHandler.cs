using System;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandHandler", Version = "1.0")]

namespace PetClinic.Application.Specialties.DeleteSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteSpecialtyCommandHandler : IRequestHandler<DeleteSpecialtyCommand>
    {
        private readonly ISpecialtyRepository _specialtyRepository;

        [IntentManaged(Mode.Ignore)]
        public DeleteSpecialtyCommandHandler(ISpecialtyRepository specialtyRepository)
        {
            _specialtyRepository = specialtyRepository;
        }

        [IntentManaged(Mode.Fully, Body = Mode.Fully)]
        public async Task<Unit> Handle(DeleteSpecialtyCommand request, CancellationToken cancellationToken)
        {
            var existingSpecialty = await _specialtyRepository.FindByIdAsync(request.Id, cancellationToken);
            _specialtyRepository.Remove(existingSpecialty);
            return Unit.Value;
        }
    }
}