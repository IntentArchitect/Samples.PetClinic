using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Owners.CreateOwner
{
    public class CreateOwnerCommand : IRequest<int>, ICommand
    {
        public CreateOwnerCommand(string firstName, string lastName, string address, string city, string telephone)
        {
            FirstName = firstName;
            LastName = lastName;
            Address = address;
            City = city;
            Telephone = telephone;
        }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Telephone { get; set; }

    }
}