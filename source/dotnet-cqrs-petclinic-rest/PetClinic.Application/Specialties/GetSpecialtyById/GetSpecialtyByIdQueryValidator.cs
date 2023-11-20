using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Specialties.GetSpecialtyById
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetSpecialtyByIdQueryValidator : AbstractValidator<GetSpecialtyByIdQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetSpecialtyByIdQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}