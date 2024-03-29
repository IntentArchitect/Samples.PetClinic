using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Specialties.UpdateSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateSpecialtyCommandValidator : AbstractValidator<UpdateSpecialtyCommand>
    {
        [IntentManaged(Mode.Merge)]
        public UpdateSpecialtyCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
            RuleFor(v => v.Name)
                .NotNull()
                .MaximumLength(80);

        }
    }
}