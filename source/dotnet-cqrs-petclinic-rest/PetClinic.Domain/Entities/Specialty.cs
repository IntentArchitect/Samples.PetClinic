using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

namespace PetClinic.Domain.Entities
{
    [DefaultIntentManaged(Mode.Fully, Targets = Targets.Methods, Body = Mode.Ignore, AccessModifiers = AccessModifiers.Public)]
    public class Specialty
    {
        public int Id { get; set; }

        public string Name { get; set; }

        protected virtual ICollection<Vet> Vets { get; set; }
    }
}