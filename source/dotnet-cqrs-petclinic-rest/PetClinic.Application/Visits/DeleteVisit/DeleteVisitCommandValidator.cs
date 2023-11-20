using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Visits.DeleteVisit
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteVisitCommandValidator : AbstractValidator<DeleteVisitCommand>
    {
        [IntentManaged(Mode.Merge)]
        public DeleteVisitCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}