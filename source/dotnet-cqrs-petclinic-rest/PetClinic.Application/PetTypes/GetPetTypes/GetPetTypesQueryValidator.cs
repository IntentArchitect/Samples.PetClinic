using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.PetTypes.GetPetTypes
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetTypesQueryValidator : AbstractValidator<GetPetTypesQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetPetTypesQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}