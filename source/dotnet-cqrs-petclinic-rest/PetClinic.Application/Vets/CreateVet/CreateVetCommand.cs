using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Vets.CreateVet
{
    public class CreateVetCommand : IRequest<int>, ICommand
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

    }
}