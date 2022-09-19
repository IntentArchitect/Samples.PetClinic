using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial class Pet : IPet
    {
        public Pet()
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

        private DateTime _birthDate;

        public DateTime BirthDate
        {
            get { return _birthDate; }
            set
            {
                _birthDate = value;
            }
        }

        public int PetTypeId { get; set; }
        private PetType _petType;

        public virtual PetType PetType
        {
            get
            {
                return _petType;
            }
            set
            {
                _petType = value;
            }
        }

        private ICollection<Visit> _visits;

        public virtual ICollection<Visit> Visits
        {
            get
            {
                return _visits ??= new List<Visit>();
            }
            set
            {
                _visits = value;
            }
        }

        public int OwnerId { get; set; }
        private Owner _owner;

        public virtual Owner Owner
        {
            get
            {
                return _owner;
            }
            set
            {
                _owner = value;
            }
        }


    }
}
