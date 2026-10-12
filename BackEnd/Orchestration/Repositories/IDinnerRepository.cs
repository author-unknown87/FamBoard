using Orchestration.Models;

namespace Orchestration.Repositories;

public interface IDinnerRepository
{
    Task<IEnumerable<Dinners>> GetDinnersAsync(int? dinnerPrimaryKey);
}
