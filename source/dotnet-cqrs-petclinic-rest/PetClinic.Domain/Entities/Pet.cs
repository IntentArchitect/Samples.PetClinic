using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

namespace PetClinic.Domain.Entities
{
    [DefaultIntentManaged(Mode.Fully, Targets = Targets.Methods, Body = Mode.Ignore, AccessModifiers = AccessModifiers.Public)]
    public class Pet
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public int PetTypeId { get; set; }

        public int? OwnerId { get; set; }

        public virtual ICollection<Visit> Visits { get; set; } = new List<Visit>();

        public virtual PetType PetType { get; set; }

        public virtual Owner? Owner { get; set; }
    }
}