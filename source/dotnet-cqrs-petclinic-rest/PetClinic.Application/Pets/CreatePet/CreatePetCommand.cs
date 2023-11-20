using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Pets.CreatePet
{
    public class CreatePetCommand : IRequest<int>, ICommand
    {
        public CreatePetCommand(string name, DateTime birthDate, int petTypeId, int? ownerId)
        {
            Name = name;
            BirthDate = birthDate;
            PetTypeId = petTypeId;
            OwnerId = ownerId;
        }
        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

        public int? OwnerId { get; set; }

    }
}