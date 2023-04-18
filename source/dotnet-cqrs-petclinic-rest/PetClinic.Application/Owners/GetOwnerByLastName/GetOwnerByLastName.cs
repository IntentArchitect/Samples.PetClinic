using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryModels", Version = "1.0")]

namespace PetClinic.Application.Owners.GetOwnerByLastName
{
    public class GetOwnerByLastName : IRequest<OwnerDto>, IQuery
    {
        public string LastName { get; set; }

    }
}