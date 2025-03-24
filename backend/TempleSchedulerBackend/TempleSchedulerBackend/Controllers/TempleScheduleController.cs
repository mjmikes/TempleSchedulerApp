using Microsoft.AspNetCore.Mvc;
using TempleSchedulerBackend.Models;
using Microsoft.EntityFrameworkCore;

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
    
        [HttpGet("GetAppointments")]
        public IEnumerable<Appointment> Get()
        {
            return _context.Appointments;
        }
        
        [HttpPost("PostAppointment")]
        public ActionResult CreateAppointment(Appointment newAppointment)
        {
            _context.Appointments.Add(newAppointment);
            _context.SaveChanges();

            return Ok();
        }
    }
}