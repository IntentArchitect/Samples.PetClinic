using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Vets.GetVetById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetVetByIdQueryValidator : AbstractValidator<GetVetByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetVetByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}