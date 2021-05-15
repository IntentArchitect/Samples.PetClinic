using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.Entities.Repositories.Api.BaseInterface", Version = "1.0")]

namespace PetClinic.Domain.Repositories
{
    public interface IRepository<TDomain, TPersistence>
    {
        void Add(TDomain entity);
        void Remove(TDomain entity);
        Task<int> SaveChangesAsync();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
        Task<TDomain> FindAsync(Expression<Func<TPersistence, bool>> filterExpression);
        Task<List<TDomain>> FindAllAsync();
        Task<List<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression);
        Task<List<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, Func<IQueryable<TPersistence>, IQueryable<TPersistence>> linq);
        Task<IPagedResult<TDomain>> FindAllAsync(int pageNo, int pageSize);
        Task<IPagedResult<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, int pageNo, int pageSize);
        Task<IPagedResult<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, int pageIndex, int pageSize, Func<IQueryable<TPersistence>, IQueryable<TPersistence>> linq);
        Task<int> CountAsync(Expression<Func<TPersistence, bool>> filterExpression);
        Task<bool> AnyAsync(Expression<Func<TPersistence, bool>> filterExpression);
    }
}