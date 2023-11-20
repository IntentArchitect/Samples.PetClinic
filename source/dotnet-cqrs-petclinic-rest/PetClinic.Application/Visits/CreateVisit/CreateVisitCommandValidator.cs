using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Visits.CreateVisit
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class CreateVisitCommandValidator : AbstractValidator<CreateVisitCommand>
    {
        [IntentManaged(Mode.Merge)]
        public CreateVisitCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
            RuleFor(v => v.Description)
                .NotNull();

        }
    }
}