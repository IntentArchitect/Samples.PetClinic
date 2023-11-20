using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Visits.UpdateVisit
{
    public class UpdateVisitCommand : IRequest, ICommand
    {
        public UpdateVisitCommand(int id, DateTime visitDate, string description)
        {
            Id = id;
            VisitDate = visitDate;
            Description = description;
        }
        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

    }
}