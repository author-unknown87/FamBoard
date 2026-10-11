using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class Users
{
    public int PrimaryKey { get; set; }

    public string? Name { get; set; }

    public string? ProfileImage { get; set; }

    public bool? Active { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Replies> Replies { get; set; } = new List<Replies>();
}
