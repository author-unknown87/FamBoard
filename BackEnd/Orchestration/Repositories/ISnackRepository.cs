using Orchestration.Models;

namespace Orchestration.Repositories;

public interface ISnackRepository
{
    Task<IEnumerable<SnackModel>> GetSnacksAsync(int? primaryKey = null);
}
