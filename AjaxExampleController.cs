using Microsoft.AspNetCore.Mvc;
using NETCore.Models;

namespace NETCore.Controllers
{
    public class AjaxExampleController : Controller
    {
        public IActionResult Index()
        {
            return View(new AjaxExampleModel());
        }

        [HttpGet]
        public string Concatenate(string a, string b)
        {
            return a + b;
        }

        [HttpGet]
        public int SumInt(int a, int b)
        {
            return a + b;
        }

        [HttpGet]
        public float SumFloat(float a, float b)
        {
            return a + b;
        }

        [HttpGet]
        public double SumDouble(double a, double b)
        {
            return a + b;
        }

        [HttpGet]
        public bool Negate(bool a)
        {
            return !a;
        }

        [HttpPost]
        public List<string> Convert(ArrayList arrayList)
        {
            //return new List<string>(arrayList.Array);
            List<string> lst = arrayList.Array.ToList();
            return lst;
        }

        public string[] ConvertToList(ListtoArray listtoArray)
        {
            return listtoArray.List.ToArray();
        }
    }
}
