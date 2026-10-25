using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class RequestsModel
{
    public int PrimaryKey { get; set; }

    public int? UserPrimaryKey { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public bool? Approved { get; set; }

    public string? Response { get; set; }

    public int? TypePrimaryKey { get; set; }
}
