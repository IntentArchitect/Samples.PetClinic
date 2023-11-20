using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.PetTypes.DeletePetType
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeletePetTypeCommandValidator : AbstractValidator<DeletePetTypeCommand>
    {
        [IntentManaged(Mode.Merge)]
        public DeletePetTypeCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}