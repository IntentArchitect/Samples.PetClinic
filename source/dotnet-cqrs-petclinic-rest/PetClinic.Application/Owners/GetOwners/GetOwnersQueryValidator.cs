using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Owners.GetOwners
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetOwnersQueryValidator : AbstractValidator<GetOwnersQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetOwnersQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}