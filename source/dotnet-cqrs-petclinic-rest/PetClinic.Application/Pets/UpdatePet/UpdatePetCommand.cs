using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Pets.UpdatePet
{
    public class UpdatePetCommand : IRequest, ICommand
    {
        public UpdatePetCommand(int id, string name, DateTime birthDate, int petTypeId)
        {
            Id = id;
            Name = name;
            BirthDate = birthDate;
            PetTypeId = petTypeId;
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

    }
}