using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial class Specialty : ISpecialty
    {
        public Specialty()
        {
        }


        private int _id;

        public int Id
        {
            get { return _id; }
            set
            {
                _id = value;
            }
        }

        private string _name;

        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        public virtual ICollection<Vet> Vets { get; set; }

    }
}
