using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class User
{
    [Key]
    public int UserId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual UserLogin? UserLogin { get; set; }
}
