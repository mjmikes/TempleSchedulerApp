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

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=templeschedule.sqlite");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.Property(e => e.AppointmentId).HasColumnName("AppointmentID");
            entity.Property(e => e.GuestCount).HasDefaultValue(0);
            entity.Property(e => e.SlotId).HasColumnName("SlotID");
            entity.Property(e => e.Status).HasDefaultValue("Scheduled");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Slot).WithMany(p => p.Appointments).HasForeignKey(d => d.SlotId);

            //entity.HasOne(d => d.User).WithMany(p => p.Appointments).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AppointmentSlot>(entity =>
        {
            entity.HasKey(e => e.SlotId);

            entity.Property(e => e.SlotId).HasColumnName("SlotID");
            entity.Property(e => e.BookedCount).HasDefaultValue(0);
            entity.Property(e => e.OrdinanceId).HasColumnName("OrdinanceID");
            entity.Property(e => e.TempleId).HasColumnName("TempleID");

            entity.HasOne(d => d.Ordinance).WithMany(p => p.AppointmentSlots).HasForeignKey(d => d.OrdinanceId);

            entity.HasOne(d => d.Temple).WithMany(p => p.AppointmentSlots).HasForeignKey(d => d.TempleId);
        });

        modelBuilder.Entity<Ordinance>(entity =>
        {
            entity.HasIndex(e => e.Name, "IX_Ordinances_Name").IsUnique();

            entity.Property(e => e.OrdinanceId).HasColumnName("OrdinanceID");
        });

        modelBuilder.Entity<Temple>(entity =>
        {
            entity.HasIndex(e => e.Name, "IX_Temples_Name").IsUnique();

            entity.Property(e => e.TempleId).HasColumnName("TempleID");
        });

        modelBuilder.Entity<TempleOrdinanceAvailability>(entity =>
        {
            entity.HasKey(e => e.AvailabilityId);

            entity.ToTable("TempleOrdinanceAvailability");

            entity.Property(e => e.AvailabilityId).HasColumnName("AvailabilityID");
            entity.Property(e => e.OrdinanceId).HasColumnName("OrdinanceID");
            entity.Property(e => e.TempleId).HasColumnName("TempleID");

            entity.HasOne(d => d.Ordinance).WithMany(p => p.TempleOrdinanceAvailabilities).HasForeignKey(d => d.OrdinanceId);

            entity.HasOne(d => d.Temple).WithMany(p => p.TempleOrdinanceAvailabilities).HasForeignKey(d => d.TempleId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Email, "IX_Users_Email").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(u => u.UserLogin)
            .WithOne(ul => ul.User)
            .HasForeignKey<UserLogin>(ul => ul.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<UserLogin>(entity =>
        {
            entity.HasKey(e => e.UserId);

            entity.ToTable("UserLogin");

            entity.HasIndex(e => e.Username, "IX_UserLogin_Username").IsUnique();

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("UserID");

            entity.HasOne(d => d.User).WithOne(p => p.UserLogin).HasForeignKey<UserLogin>(d => d.UserId);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
