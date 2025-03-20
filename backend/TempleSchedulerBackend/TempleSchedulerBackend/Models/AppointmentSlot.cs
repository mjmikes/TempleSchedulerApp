using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class AppointmentSlot
{
    [Key]
    public int SlotId { get; set; }

    public int TempleId { get; set; }

    public int OrdinanceId { get; set; }

    public string SlotDateTime { get; set; } = null!;

    public int MaxCapacity { get; set; }

    public int? BookedCount { get; set; }

    public virtual Ordinance Ordinance { get; set; } = null!;

    public virtual Temple Temple { get; set; } = null!;
}
