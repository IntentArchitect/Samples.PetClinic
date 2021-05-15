using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.Repositories.BaseRepository", Version = "1.0")]

namespace PetClinic.Infrastructure.Repositories
{
    public class RepositoryBase<TDomain, TPersistence, TDbContext> : IRepository<TDomain, TPersistence>
        where TDbContext : DbContext
        where TPersistence : class, TDomain
        where TDomain : class
    {
        private readonly TDbContext _dbContext;

        public RepositoryBase(TDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public virtual void Remove(TDomain entity)
        {
            GetSet().Remove((TPersistence)entity);
        }

        public virtual void Add(TDomain entity)
        {
            GetSet().Add((TPersistence)entity);
        }

        public Task<int> SaveChangesAsync()
        {
            return _dbContext.SaveChangesAsync();
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            return _dbContext.SaveChangesAsync(cancellationToken);
        }

        public virtual async Task<TDomain> FindAsync(Expression<Func<TPersistence, bool>> filterExpression)
        {
            return await QueryInternal(filterExpression).SingleOrDefaultAsync<TDomain>();
        }

        public virtual async Task<List<TDomain>> FindAllAsync()
        {
            return await QueryInternal(x => true).ToListAsync<TDomain>();
        }

        public virtual async Task<List<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression)
        {
            return await QueryInternal(filterExpression).ToListAsync<TDomain>();
        }


        public virtual async Task<List<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, Func<IQueryable<TPersistence>, IQueryable<TPersistence>> linq)
        {
            return await QueryInternal(filterExpression, linq).ToListAsync<TDomain>();
        }

        public virtual async Task<IPagedResult<TDomain>> FindAllAsync(int pageNo, int pageSize)
        {
            var query = QueryInternal(x => true);
            return await PagedList<TDomain>.CreateAsync(
                query,
                pageNo,
                pageSize);
        }

        public virtual async Task<IPagedResult<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, int pageNo, int pageSize)
        {
            var query = QueryInternal(filterExpression);
            return await PagedList<TDomain>.CreateAsync(
                query,
                pageNo,
                pageSize);
        }

        public virtual async Task<IPagedResult<TDomain>> FindAllAsync(Expression<Func<TPersistence, bool>> filterExpression, int pageNo, int pageSize, Func<IQueryable<TPersistence>, IQueryable<TPersistence>> linq)
        {
            var query = QueryInternal(filterExpression, linq);
            return await PagedList<TDomain>.CreateAsync(
                query,
                pageNo,
                pageSize);
        }

        public virtual async Task<int> CountAsync(Expression<Func<TPersistence, bool>> filterExpression)
        {
            return await QueryInternal(filterExpression).CountAsync();
        }

        public bool Any(Expression<Func<TPersistence, bool>> filterExpression)
        {
            return QueryInternal(filterExpression).Any();
        }

        public virtual async Task<bool> AnyAsync(Expression<Func<TPersistence, bool>> filterExpression)
        {
            return await QueryInternal(filterExpression).AnyAsync();
        }

        protected virtual IQueryable<TPersistence> QueryInternal(Expression<Func<TPersistence, bool>> filterExpression)
        {
            var queryable = CreateQuery();
            if (filterExpression != null)
            {
                queryable = queryable.Where(filterExpression);
            }
            return queryable;
        }

        protected virtual IQueryable<TResult> QueryInternal<TResult>(Expression<Func<TPersistence, bool>> filterExpression, Func<IQueryable<TPersistence>, IQueryable<TResult>> linq)
        {
            var queryable = CreateQuery();
            queryable = queryable.Where(filterExpression);

            var result = linq(queryable);
            return result;
        }

        protected virtual IQueryable<TPersistence> CreateQuery()
        {
            return GetSet();
        }

        protected virtual DbSet<TPersistence> GetSet()
        {
            return _dbContext.Set<TPersistence>();
        }
    }
}
