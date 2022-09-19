using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityInterface", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial interface IOwner
    {

        int Id { get; set; }

        string FirstName { get; set; }

        string LastName { get; set; }

        string Address { get; set; }

        string City { get; set; }

        string Telephone { get; set; }

        ICollection<Pet> Pets { get; set; }

    }
}
