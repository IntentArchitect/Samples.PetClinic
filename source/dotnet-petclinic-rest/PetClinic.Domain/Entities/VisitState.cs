using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Domain.Entities.Common;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.DomainEntityState", Version = "1.0")]

namespace PetClinic.Domain.Entities
{

    public partial class Visit : IVisit
    {
        public Visit()
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

        private DateTime _visitDate;

        public DateTime VisitDate
        {
            get { return _visitDate; }
            set
            {
                _visitDate = value;
            }
        }

        private string _description;

        public string Description
        {
            get { return _description; }
            set
            {
                _description = value;
            }
        }

        public int PetId { get; set; }
        private Pet _pet;

        public virtual Pet Pet
        {
            get
            {
                return _pet;
            }
            set
            {
                _pet = value;
            }
        }


    }
}
