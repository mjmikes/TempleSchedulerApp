using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TempleSchedulerBackend.Models;

public partial class TempleScheduleContext : DbContext
{
    public TempleScheduleContext()
    {
    }

    public TempleScheduleContext(DbContextOptions<TempleScheduleContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<AppointmentSlot> AppointmentSlots { get; set; }

    public virtual DbSet<Ordinance> Ordinances { get; set; }

    public virtual DbSet<Temple> Temples { get; set; }

    public virtual DbSet<TempleOrdinanceAvailability> TempleOrdinanceAvailabilities { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserLogin> UserLogins { get; set; }
}