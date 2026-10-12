using Microsoft.AspNetCore.Mvc;
using Orchestration.Models;
using Orchestration.Repositories;

namespace Orchestration.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DinnerController : ControllerBase
{
    private readonly IDinnerRepository _dinnerRepository;

    public DinnerController(IDinnerRepository dinnerRepository)
    {
        _dinnerRepository = dinnerRepository;
    }

    [HttpGet("get-dinners")]    
    public async Task<ActionResult<IEnumerable<Dinners>>> GetDinners([FromQuery] int? DinnerPrimaryKey)
    {
        var dinners = await _dinnerRepository.GetDinnersAsync(DinnerPrimaryKey);
        return Ok(dinners);
    }

    [HttpPut("upsert-dinner")]
    public ActionResult<bool> UpsertDinner([FromBody] string request)
    {
        return Ok(true);
    }

    [HttpDelete("delete-dinner")]
    public IActionResult DeleteDinner()
    {
        return Ok();
    }
}
