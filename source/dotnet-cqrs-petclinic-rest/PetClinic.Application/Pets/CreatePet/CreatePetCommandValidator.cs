using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Pets.CreatePet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreatePetCommandValidator : AbstractValidator<CreatePetCommand>
    {
        [IntentManaged(Mode.Merge)]
        public CreatePetCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
            RuleFor(v => v.Name)
                .NotNull()
                .MaximumLength(30);

        }
    }
}