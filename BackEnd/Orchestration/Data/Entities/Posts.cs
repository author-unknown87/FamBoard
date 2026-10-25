using System;
using System.Collections.Generic;

namespace Orchestration.Data.Entities;

public partial class Posts
{
    public int PrimaryKey { get; set; }

    public string? Title { get; set; }

    public int? UserPrimaryKey { get; set; }

    public bool? Active { get; set; }

    public virtual ICollection<Replies> Replies { get; set; } = new List<Replies>();
}
