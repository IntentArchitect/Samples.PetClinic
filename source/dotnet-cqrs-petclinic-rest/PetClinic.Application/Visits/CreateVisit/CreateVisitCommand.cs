using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.CommandModels", Version = "1.0")]

namespace PetClinic.Application.Visits.CreateVisit
{
    public class CreateVisitCommand : IRequest<int>, ICommand
    {
        public int? PetId { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

    }
}