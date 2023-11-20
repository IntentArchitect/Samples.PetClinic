using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.PetTypes.UpdatePetType
{
    public class UpdatePetTypeCommand : IRequest, ICommand
    {
        public UpdatePetTypeCommand(int id, string name)
        {
            Id = id;
            Name = name;
        }
        public int Id { get; set; }

        public string Name { get; set; }

    }
}