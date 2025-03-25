using HR.LeaveManagement.Application.Contracts.Identity;
using HR.LeaveManagement.Application.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HR.LeaveManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private readonly IUserService _userService;

        public EmployeesController(IUserService userService)
        {
            _userService = userService;

        }

        [HttpGet("employees")]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            var users = await _userService.GetEmployees();
            return Ok(users);
        }
    }
}
