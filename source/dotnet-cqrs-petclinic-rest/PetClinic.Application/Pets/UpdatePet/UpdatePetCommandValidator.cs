using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Pets.UpdatePet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class UpdatePetCommandValidator : AbstractValidator<UpdatePetCommand>
    {
        [IntentManaged(Mode.Merge)]
        public UpdatePetCommandValidator()
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