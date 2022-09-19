using System.Collections.Generic;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.Repositories.Api.PagedResultInterface", Version = "1.0")]

namespace PetClinic.Domain.Repositories
{
    public interface IPagedResult<out T> : IEnumerable<T>
    {
        int TotalCount { get; }
        int PageCount { get; }
        int PageNo { get; }
        int PageSize { get; }
    }
}
