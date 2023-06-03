using ServerProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ServerProject.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Login(string userName, string password)
        {
            User user1 = DB.Users.FirstOrDefault(u => u.Name == userName);
            User user;
            if (user1 == null)//האם לא קיים משתמש בשם שנשלח
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "the user is not found.");
            }
            //אם לא יצא מהפונקציה זה אומר שיש משתמש בשם הזה
            user = DB.Users.FirstOrDefault(u => u.Name == userName && u.Password == password);
            if (user == null)//האם הסיסמא שגויה
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "the password is not correct.");
            return Request.CreateResponse(HttpStatusCode.OK, user);
        }

        [HttpPost]
        public IHttpActionResult Register([FromBody]User newUser)
        {
            if (DB.Users.FirstOrDefault(u => u.Id == newUser.Id && u.Name == newUser.Name) != null)
                return Conflict();
            DB.Users.Add(newUser);
            return Ok(newUser);
        }

        // GET: api/User
        [HttpGet]
        public IHttpActionResult GetAllUsers()
        {
            if (DB.Users == null)
                return NotFound();
            return Ok(DB.Users);
        }

        // GET: api/User/5
        [HttpGet]
        public IHttpActionResult GetUser(string id)
        {
            User user = DB.Users.FirstOrDefault(u => u.Id == id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        // POST: api/User
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
