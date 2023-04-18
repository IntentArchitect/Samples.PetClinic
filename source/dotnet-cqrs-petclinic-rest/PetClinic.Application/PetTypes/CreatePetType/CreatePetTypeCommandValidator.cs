using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "1.0")]

namespace PetClinic.Application.PetTypes.CreatePetType
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreatePetTypeCommandValidator : AbstractValidator<CreatePetTypeCommand>
    {
        [IntentManaged(Mode.Fully, Body = Mode.Ignore, Signature = Mode.Merge)]
        public CreatePetTypeCommandValidator()
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