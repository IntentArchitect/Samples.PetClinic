using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial class Owner : IOwner
    {
        public Owner()
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

        private string _address;

        public string Address
        {
            get { return _address; }
            set
            {
                _address = value;
            }
        }

        private string _city;

        public string City
        {
            get { return _city; }
            set
            {
                _city = value;
            }
        }

        private string _telephone;

        public string Telephone
        {
            get { return _telephone; }
            set
            {
                _telephone = value;
            }
        }

        private ICollection<Pet> _pets;

        public virtual ICollection<Pet> Pets
        {
            get
            {
                return _pets ?? (_pets = new List<Pet>());
            }
            set
            {
                _pets = value;
            }
        }


    }
}
