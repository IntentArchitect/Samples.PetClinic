using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Vets.CreateVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateVetCommandValidator : AbstractValidator<CreateVetCommand>
    {
        [IntentManaged(Mode.Merge)]
        public CreateVetCommandValidator()
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