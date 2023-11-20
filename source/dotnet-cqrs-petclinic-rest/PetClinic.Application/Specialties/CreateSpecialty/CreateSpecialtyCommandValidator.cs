using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Specialties.CreateSpecialty
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateSpecialtyCommandValidator : AbstractValidator<CreateSpecialtyCommand>
    {
        [IntentManaged(Mode.Merge)]
        public CreateSpecialtyCommandValidator()
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