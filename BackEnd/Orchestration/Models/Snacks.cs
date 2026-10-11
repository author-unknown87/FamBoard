using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class Snacks
{
    public int PrimaryKey { get; set; }

    public string? Name { get; set; }

    public int? Quantity { get; set; }

    public string? Measurement { get; set; }

    public bool? Gone { get; set; }
}
