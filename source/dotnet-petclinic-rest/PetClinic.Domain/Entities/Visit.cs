using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: IntentTemplate("Intent.Entities.DomainEntity", Version = "1.0")]

namespace PetClinic.Domain.Entities
{
    public class Visit
    {
        [IntentIgnore]
        public static Visit Create() {

        }

        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

        public int PetId { get; set; }

        public virtual Pet Pet { get; set; }

    }
}