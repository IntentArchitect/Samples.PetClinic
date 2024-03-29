using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.PetTypes.GetPetTypeById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetTypeByIdQueryValidator : AbstractValidator<GetPetTypeByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetPetTypeByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}