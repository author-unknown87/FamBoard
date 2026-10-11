using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class Events
{
    public int PrimaryKey { get; set; }

    public DateTime? DatePlanned { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Notes { get; set; }
}
