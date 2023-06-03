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
    public class RecipeController : ApiController
    {
        [HttpGet]
        // GET: api/Recipe
        public IHttpActionResult GetAllRecipes()
        {
            if (DB.Recipes == null)
                return NotFound();
            return Ok(DB.Recipes);
        }

        [HttpGet]
        public IHttpActionResult GetId()
        {
            if (DB.Recipes == null || DB.Recipes.Count == 0)
                return Ok(0);
            return Ok(DB.Recipes[DB.Recipes.Count - 1].Code);
        }
        [HttpPost]
        public IHttpActionResult AddNewRecipe(Recipe recipe)
        {
            if (DB.Recipes.FirstOrDefault(r => r.Code == recipe.Code) != null)
                return Conflict();
            DB.Recipes.Add(recipe);
            return Ok(recipe);
        }

        // GET: api/Recipe/5
        [HttpGet]
        public IHttpActionResult GetRecipe(int id)
        {
            Recipe c = DB.Recipes.FirstOrDefault(a => a.Code == id);
            if (c == null)
                return NotFound();
            return Ok(c);
        }

        [HttpDelete]
        public IHttpActionResult DeleteRecipe(int recipeId)
        {
            Recipe recipe = DB.Recipes.FirstOrDefault(r=>r.Code==recipeId);
            if (recipe==null)
                return NotFound();
            DB.Recipes.Remove(recipe);
            return Ok(recipe);
        }

        // POST: api/Recipe
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Recipe/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Recipe/5
        public void Delete(int id)
        {
        }
    }
}
