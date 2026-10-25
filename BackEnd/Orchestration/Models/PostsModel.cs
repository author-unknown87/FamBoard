using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class PostsModel
{
    public int PrimaryKey { get; set; }

    public string? Title { get; set; }

    public int? UserPrimaryKey { get; set; }

    public bool? Active { get; set; }
}
