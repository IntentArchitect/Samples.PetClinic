using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Vets.GetVets
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVetsQueryValidator : AbstractValidator<GetVetsQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetVetsQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}