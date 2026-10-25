using Microsoft.EntityFrameworkCore;
using Orchestration.Data;
using SnackDto = Orchestration.Models.SnackModel;

namespace Orchestration.Repositories;

public class SnackRepository : ISnackRepository
{
    private readonly FamBoardContext _context;
    private readonly ILogger<SnackRepository> _logger;

    public SnackRepository(FamBoardContext context, ILogger<SnackRepository> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<IEnumerable<SnackDto>> GetSnacksAsync(int? primaryKey = null)
    {
        try
        {
            var query = _context.Snacks
                .AsNoTracking()
                .Select(snack => new SnackDto
                {
                    PrimaryKey = snack.PrimaryKey,
                    Name = snack.Name,
                    Description = snack.Description,
                    Quantity = snack.Quantity,
                    Measurement = snack.Measurement,
                    Gone = snack.Gone,
                });

            if (primaryKey.HasValue)
            {
                var snack = await query
                    .Where(item => item.PrimaryKey == primaryKey.Value)
                    .FirstOrDefaultAsync();

                return snack is null ? [] : [snack];
            }

            return await query.ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting snacks for PrimaryKey {PrimaryKey}", primaryKey);
            return Array.Empty<SnackDto>();
        }
    }
}
