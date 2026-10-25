using System;
using System.Collections.Generic;

namespace Orchestration.Data.Entities;

public partial class Replies
{
    public int PrimaryKey { get; set; }

    public int? PostPrimaryKey { get; set; }

    public string? Body { get; set; }

    public int? UserPrimaryKey { get; set; }

    public bool? Active { get; set; }

    public virtual Posts? PostPrimaryKeyNavigation { get; set; }

    public virtual Users? UserPrimaryKeyNavigation { get; set; }
}
