using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Visits.GetVisitById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVisitByIdQueryValidator : AbstractValidator<GetVisitByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetVisitByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}