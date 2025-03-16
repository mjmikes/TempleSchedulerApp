using Microsoft.AspNetCore.Mvc;
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
    }
}