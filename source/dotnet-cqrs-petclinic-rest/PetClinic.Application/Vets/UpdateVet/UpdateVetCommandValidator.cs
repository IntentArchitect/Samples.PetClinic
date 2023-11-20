using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Vets.UpdateVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdateVetCommandValidator : AbstractValidator<UpdateVetCommand>
    {
        [IntentManaged(Mode.Merge)]
        public UpdateVetCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
            RuleFor(v => v.FirstName)
                .NotNull()
                .MaximumLength(30);

            RuleFor(v => v.LastName)
                .NotNull()
                .MaximumLength(30);

        }
    }
}