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
    public class CategoryController : ApiController
    {
        [HttpGet]
        // GET: api/Category
        public IHttpActionResult GetAllCategories()
        {
            if (DB.Categories == null || DB.Categories.Count == 0)
                return NotFound();
            return Ok(DB.Categories);
        }

        // GET: api/Category/5
        [HttpGet]
        public IHttpActionResult GetCategory(int id)
        {
            Category c = DB.Categories.First(a => a.Code == id);
            if (c == null)
                return NotFound();
            return Ok(c);
        }

        // POST: api/Category
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Category/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Category/5
        public void Delete(int id)
        {
        }
    }
}
