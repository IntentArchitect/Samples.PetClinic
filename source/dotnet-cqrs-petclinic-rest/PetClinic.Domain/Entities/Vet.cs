using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

namespace PetClinic.Domain.Entities
{
    [DefaultIntentManaged(Mode.Fully, Targets = Targets.Methods, Body = Mode.Ignore, AccessModifiers = AccessModifiers.Public)]
    public class Vet
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public virtual ICollection<Specialty> Specialties { get; set; } = new List<Specialty>();
    }
}