using System;
using System.Collections.Generic;

namespace TempleSchedulerBackend.Models;

public partial class Temple
{
    public int TempleId { get; set; }

    public string Name { get; set; } = null!;

    public string StreetAddress { get; set; } = null!;

    public string City { get; set; } = null!;

    public string State { get; set; } = null!;

    public string Zip { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public virtual ICollection<AppointmentSlot> AppointmentSlots { get; set; } = new List<AppointmentSlot>();

    public virtual ICollection<TempleOrdinanceAvailability> TempleOrdinanceAvailabilities { get; set; } = new List<TempleOrdinanceAvailability>();
}
