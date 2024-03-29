using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Vets.DeleteVet
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteVetCommandValidator : AbstractValidator<DeleteVetCommand>
    {
        [IntentManaged(Mode.Merge)]
        public DeleteVetCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}