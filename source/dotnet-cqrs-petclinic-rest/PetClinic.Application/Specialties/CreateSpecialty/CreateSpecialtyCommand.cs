using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Specialties.CreateSpecialty
{
    public class CreateSpecialtyCommand : IRequest<int>, ICommand
    {
        public CreateSpecialtyCommand(string name)
        {
            Name = name;
        }
        public string Name { get; set; }

    }
}