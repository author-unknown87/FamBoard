using Orchestration.Models;

namespace Orchestration.Repositories;

public interface IDinnerRepository
{
    Task<IEnumerable<DinnersModel>> GetDinnersAsync(int? dinnerPrimaryKey);
}
