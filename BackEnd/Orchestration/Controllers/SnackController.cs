using Microsoft.AspNetCore.Mvc;
using Orchestration.Models;
using Orchestration.Repositories;

namespace Orchestration.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SnackController : ControllerBase
{
    private readonly ISnackRepository _snackRepository;

    public SnackController(ISnackRepository snackRepository)
    {
        _snackRepository = snackRepository;
    }

    [HttpGet("get-snacks")]
    public async Task<ActionResult<IEnumerable<SnackModel>>> GetSnacks([FromQuery] int? PrimaryKey)
    {
        var snacks = await _snackRepository.GetSnacksAsync(PrimaryKey);
        return Ok(snacks);
    }
}
