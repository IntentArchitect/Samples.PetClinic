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
        public async Task Handle(UpdateSpecialtyCommand request, CancellationToken cancellationToken)
        {
            var existingSpecialty = await _specialtyRepository.FindByIdAsync(request.Id, cancellationToken);
            if (existingSpecialty is null)
            {
                throw new NotFoundException($"Could not find Specialty '{request.Id}'");
            }

            existingSpecialty.Name = request.Name;

        }
    }
}