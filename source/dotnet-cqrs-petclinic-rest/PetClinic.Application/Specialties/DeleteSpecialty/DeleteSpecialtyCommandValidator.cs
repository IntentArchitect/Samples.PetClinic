using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "1.0")]

namespace PetClinic.Application.Specialties.DeleteSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteSpecialtyCommandValidator : AbstractValidator<DeleteSpecialtyCommand>
    {
        [IntentManaged(Mode.Fully, Body = Mode.Ignore, Signature = Mode.Merge)]
        public DeleteSpecialtyCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}