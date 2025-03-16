using System;
using System.Collections.Generic;

namespace TempleSchedulerBackend.Models;

public partial class Appointment
{
    public int AppointmentId { get; set; }

    public int UserId { get; set; }

    public int SlotId { get; set; }

    public int? GuestCount { get; set; }

    public string Status { get; set; } = null!;

    public virtual AppointmentSlot Slot { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
