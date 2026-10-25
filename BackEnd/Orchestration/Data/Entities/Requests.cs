using System;
using System.Collections.Generic;

namespace Orchestration.Data.Entities;

public partial class Requests
{
    public int PrimaryKey { get; set; }

    public int? UserPrimaryKey { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public bool? Approved { get; set; }

    public string? Response { get; set; }

    public int? TypePrimaryKey { get; set; }

    public virtual RequestTypes? TypePrimaryKeyNavigation { get; set; }
}
