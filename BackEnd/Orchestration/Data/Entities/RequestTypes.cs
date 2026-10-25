using System;
using System.Collections.Generic;

namespace Orchestration.Data.Entities;

public partial class RequestTypes
{
    public int PrimaryKey { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Requests> Requests { get; set; } = new List<Requests>();
}
