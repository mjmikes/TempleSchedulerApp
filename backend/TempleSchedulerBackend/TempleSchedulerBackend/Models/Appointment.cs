using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class Appointment
{
    [Key]
    public int AppointmentId { get; set; }

    public int UserId { get; set; }

    public int SlotId { get; set; }

    public int? GuestCount { get; set; }

    public string Status { get; set; } = null!;
}
