using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class TempleOrdinanceAvailability
{
    [Key]
    public int AvailabilityId { get; set; }

    public int TempleId { get; set; }

    public int OrdinanceId { get; set; }

    public string StartTime { get; set; } = null!;

    public string EndTime { get; set; } = null!;

    public int SlotDurationMinutes { get; set; }

    public int MaxPeoplePerSlot { get; set; }

    public string DaysAvailable { get; set; } = null!;

    public virtual Ordinance Ordinance { get; set; } = null!;

    public virtual Temple Temple { get; set; } = null!;
}
