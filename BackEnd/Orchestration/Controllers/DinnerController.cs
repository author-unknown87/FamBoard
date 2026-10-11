using Microsoft.AspNetCore.Mvc;

namespace Orchestration.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DinnerController : ControllerBase
{
    [HttpGet("get-dinners")]
    public ActionResult<IEnumerable<object>> GetDinners([FromQuery] int? DinnerPrimaryKey)
    {
        return Ok(Array.Empty<object>());
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
