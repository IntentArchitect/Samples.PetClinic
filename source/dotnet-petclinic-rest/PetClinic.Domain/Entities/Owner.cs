using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Ignore)]
[assembly: IntentTemplate("Intent.Entities.DomainEntity", Version = "1.0")]

namespace PetClinic.Domain.Entities
{
    [IntentManaged(Mode.Merge)]
    [DefaultIntentManaged(Mode.Merge, Signature = Mode.Merge, Body = Mode.Ignore, Targets = Targets.Methods, AccessModifiers = AccessModifiers.Public)]
    public partial class Owner
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Telephone { get; set; }

        public virtual ICollection<Pet> Pets { get; set; } = new List<Pet>();

    }
}