using System;
using FluentValidation;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.FluentValidation.CommandValidator", Version = "2.0")]

namespace PetClinic.Application.Owners.DeleteOwner
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    public class DeleteOwnerCommandValidator : AbstractValidator<DeleteOwnerCommand>
    {
        [IntentManaged(Mode.Merge)]
        public DeleteOwnerCommandValidator()
        {
            ConfigureValidationRules();
        }

        [IntentManaged(Mode.Fully)]
        private void ConfigureValidationRules()
        {
        }
    }
}