using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class RepliesModel
{
    public int PrimaryKey { get; set; }

    public int? PostPrimaryKey { get; set; }

    public string? Body { get; set; }

    public int? UserPrimaryKey { get; set; }

    public bool? Active { get; set; }
}
