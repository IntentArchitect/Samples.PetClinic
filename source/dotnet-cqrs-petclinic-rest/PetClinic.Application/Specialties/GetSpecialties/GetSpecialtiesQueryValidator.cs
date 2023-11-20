using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.QueryValidator", Version = "2.0")]

namespace PetClinic.Application.Specialties.GetSpecialties
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class GetSpecialtiesQueryValidator : AbstractValidator<GetSpecialtiesQuery>
    {
        [IntentManaged(Mode.Merge)]
        public GetSpecialtiesQueryValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}