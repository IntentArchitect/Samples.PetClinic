using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Pets.GetPetById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetPetByIdQueryValidator : AbstractValidator<GetPetByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetPetByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}