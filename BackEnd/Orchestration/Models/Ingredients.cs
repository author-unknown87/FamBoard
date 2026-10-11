using System;
using System.Collections.Generic;

namespace Orchestration.Models;

public partial class Ingredients
{
    public int? DinnerPrimaryKey { get; set; }

    public string? Name { get; set; }

    public virtual Dinners? DinnerPrimaryKeyNavigation { get; set; }
}
