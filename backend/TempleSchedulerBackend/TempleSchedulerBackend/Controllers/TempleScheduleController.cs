using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TempleSchedulerBackend.Models;

namespace TempleSchedulerBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TempleScheduleController : ControllerBase
    {

        private TempleScheduleContext _context;

        public TempleScheduleController(TempleScheduleContext temp)
        {
            _context = temp;
        }
    
        [HttpGet(Name = "Appointments")]
        public IEnumerable<Appointment> Get()
        {
            return _context.Appointments;
        }
        
        [HttpPost(Name = "Appointment")]
        public ActionResult<Appointment> CreateAppointment([FromBody] Appointment newAppointment)
        {

            _context.Appointments.Add(newAppointment);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = newAppointment.AppointmentId }, newAppointment);
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            if (user == null)
                return BadRequest("User data is required.");

            // Validate required fields
            if (string.IsNullOrWhiteSpace(user.FirstName) ||
                string.IsNullOrWhiteSpace(user.LastName) ||
                string.IsNullOrWhiteSpace(user.Email) ||
                string.IsNullOrWhiteSpace(user.PhoneNumber))
            {
                return BadRequest("All required fields must be provided.");
            }

            // Check if the email already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUser != null)
            {
                return Conflict("A user with this email already exists.");
            }

            // Hash the password (replace PhoneNumber with an actual password field)
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.PhoneNumber);

            // Add the User to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync(); // Save to get generated UserId

            // Create and save the UserLogin
            var userLogin = new UserLogin
            {
                UserId = user.UserId, // Use the generated UserId
                Username = user.Email, // Assuming email as the username
                PasswordHash = hashedPassword // Store hashed password
            };

            _context.UserLogins.Add(userLogin);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(RegisterUser), new { id = user.UserId }, new
            {
                user.UserId,
                user.FirstName,
                user.LastName,
                user.Email
            });
        }
    }
}