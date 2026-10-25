using Microsoft.EntityFrameworkCore;
using Orchestration.Data;
using DinnerDto = Orchestration.Models.DinnersModel;

namespace Orchestration.Repositories;

public class DinnerRepository : IDinnerRepository
{
    private readonly FamBoardContext _context;
    private readonly ILogger<DinnerRepository> _logger;

    public DinnerRepository(FamBoardContext context, ILogger<DinnerRepository> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<IEnumerable<DinnerDto>> GetDinnersAsync(int? dinnerPrimaryKey)
    {
        try
        {
            if (dinnerPrimaryKey.HasValue)
            {
                var dinner = await _context.Dinners
                    .AsNoTracking()
                    .Where(d => d.PrimaryKey == dinnerPrimaryKey.Value)
                    .Select(dinner => new DinnerDto
                    {
                        PrimaryKey = dinner.PrimaryKey,
                        Name = dinner.Name,
                        Description = dinner.Description,
                        PlannedNight = dinner.PlannedNight,
                    })
                    .ToListAsync();

                return dinner;
            }

            return await _context.Dinners
                .AsNoTracking()
                .Select(dinner => new DinnerDto
                {
                    PrimaryKey = dinner.PrimaryKey,
                    Name = dinner.Name,
                    Description = dinner.Description,
                    PlannedNight = dinner.PlannedNight,
                })
                .ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting dinners for DinnerPrimaryKey {DinnerPrimaryKey}", dinnerPrimaryKey);
            return Array.Empty<DinnerDto>();
        }
    }
}
