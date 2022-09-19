using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityInterface", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial interface IVet
    {

        int Id { get; set; }

        string FirstName { get; set; }

        string LastName { get; set; }

        ICollection<Specialty> Specialties { get; set; }

    }
}
