using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class Dinners
{
    public int PrimaryKey { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public DateTime? PlannedNight { get; set; }
}
