using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerProject.Models
{
    public class Recipe
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public int CategoryCode { get; set; }
        public int MinutesToMake { get; set; }
        public int Level { get; set; }
        public DateTime AddedDate { get; set; }
        public List<string> Ingreadients { get; set; }
        public List<string> Introductions { get; set; }
        public string UserCode { get; set; }
        public string Image { get; set; }
        public Recipe()
        {
            //Ingreadients = new List<string>();
            //Ingreadients.Add("aaaaaaaaaaaaaaaaaa");
            //Ingreadients.Add("ssssssssssssssssssss");
        }
    }
}