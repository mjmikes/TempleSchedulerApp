using System;
using System.Collections.Generic;

namespace TempleSchedulerBackend.Models;

public partial class UserLogin
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
