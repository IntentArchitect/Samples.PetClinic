using System;
using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;
using MediatR;
using PetClinic.Application.Common.Interfaces;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Application.MediatR.QueryModels", Version = "1.0")]

namespace PetClinic.Application.Vets.GetVetById
{
    public class GetVetByIdQuery : IRequest<VetDto>, IQuery
    {
        public GetVetByIdQuery(int id)
        {
            Id = id;
        }
        public int Id { get; set; }

    }
}