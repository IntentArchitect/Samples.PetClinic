using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "1.0")]

namespace PetClinic.Application.Owners.GetOwnerByLastName
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetOwnerByLastNameValidator : AbstractValidator<GetOwnerByLastName>
    {
        [IntentManaged(Mode.Fully, Body = Mode.Ignore, Signature = Mode.Merge)]
        public GetOwnerByLastNameValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
            RuleFor(v => v.LastName)
                .NotNull();

        }
    }
}