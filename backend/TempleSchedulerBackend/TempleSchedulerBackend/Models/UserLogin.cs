﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TempleSchedulerBackend.Models;

public partial class UserLogin
{
    [Key]
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
