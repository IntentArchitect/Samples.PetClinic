using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Owners.GetOwnerById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetOwnerByIdQueryValidator : AbstractValidator<GetOwnerByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetOwnerByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}