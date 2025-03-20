using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class Ordinance
{
    [Key]
    public int OrdinanceId { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<AppointmentSlot> AppointmentSlots { get; set; } = new List<AppointmentSlot>();

    public virtual ICollection<TempleOrdinanceAvailability> TempleOrdinanceAvailabilities { get; set; } = new List<TempleOrdinanceAvailability>();
}
