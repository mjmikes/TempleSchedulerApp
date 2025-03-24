using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class Temple
{
    [Key]
    public int TempleId { get; set; }

    public string Name { get; set; } = null!;

    public string StreetAddress { get; set; } = null!;

    public string City { get; set; } = null!;

    public string State { get; set; } = null!;

    public string Zip { get; set; } = null!;

    public string? PhoneNumber { get; set; }
}
