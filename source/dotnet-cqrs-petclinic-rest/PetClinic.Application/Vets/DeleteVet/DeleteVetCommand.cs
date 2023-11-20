using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Vets.DeleteVet
{
    public class DeleteVetCommand : IRequest, ICommand
    {
        public DeleteVetCommand(int id)
        {
            Id = id;
        }
        public int Id { get; set; }

    }
}