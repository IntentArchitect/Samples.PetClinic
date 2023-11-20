using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Owners.CreateOwner
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateOwnerCommandValidator : AbstractValidator<CreateOwnerCommand>
    {
        [IntentManaged(Mode.Merge)]
        public CreateOwnerCommandValidator()
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

            RuleFor(v => v.Address)
                .NotNull()
                .MaximumLength(255);

            RuleFor(v => v.City)
                .NotNull()
                .MaximumLength(80);

            RuleFor(v => v.Telephone)
                .NotNull()
                .MaximumLength(20);

        }
    }
}