using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial class Vet : IVet
    {
        public Vet()
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

        private string _firstName;

        public string FirstName
        {
            get { return _firstName; }
            set
            {
                _firstName = value;
            }
        }

        private string _lastName;

        public string LastName
        {
            get { return _lastName; }
            set
            {
                _lastName = value;
            }
        }

        private ICollection<Specialty> _specialties;

        public virtual ICollection<Specialty> Specialties
        {
            get
            {
                return _specialties ??= new List<Specialty>();
            }
            set
            {
                _specialties = value;
            }
        }


    }
}
