using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityInterface", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial interface IVisit
    {

        int Id { get; set; }

        DateTime VisitDate { get; set; }

        string Description { get; set; }
        int PetId { get; }
        Pet Pet { get; set; }

    }
}
