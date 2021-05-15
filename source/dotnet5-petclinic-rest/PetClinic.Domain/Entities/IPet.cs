using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityInterface", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial interface IPet
    {

        int Id { get; set; }

        string Name { get; set; }

        DateTime BirthDate { get; set; }

        int PetTypeId { get; }
        PetType PetType { get; set; }

        ICollection<Visit> Visits { get; set; }

        int OwnerId { get; }
        Owner Owner { get; set; }

    }
}
