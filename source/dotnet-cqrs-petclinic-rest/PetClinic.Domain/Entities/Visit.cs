using System;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntity", Version = "1.0")]

namespace PetClinic.Domain.Entities
{
    [IntentManaged(Mode.Merge, Signature = Mode.Fully)]
    [DefaultIntentManaged(Mode.Fully, Targets = Targets.Properties)]
    [DefaultIntentManaged(Mode.Fully, Targets = Targets.Methods, Body = Mode.Ignore, AccessModifiers = AccessModifiers.Public)]
    public class Visit
    {
        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Description { get; set; }

        public int? PetId { get; set; }

        public virtual Pet? Pet { get; set; }
    }
}