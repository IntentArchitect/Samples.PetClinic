using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Vets.UpdateVet
{
    public class UpdateVetCommand : IRequest, ICommand
    {
        public UpdateVetCommand(int id, string firstName, string lastName)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
        }
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

    }
}