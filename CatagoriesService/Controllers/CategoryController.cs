using Category.Modal;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace CatagoriesService.Controllers
{
    public class CategoryController : ApiController
    {

        [HttpGet]
        public dynamic GetCategoriesByID(int id)
        {
            using (CategoryContext catContext = new CategoryContext())
            {
                return Ok(catContext.SubCategories.Where(subCat => subCat.CategoryId == id).Select(subCat => new { subCat.Id, subCat.Name, subCat.CategoryId }).ToList());
            }

        }

        [HttpPost]
        public void AddNewCategory(SubCategory newCategory)
        {
            using (CategoryContext catContext = new CategoryContext())
            {
                catContext.SubCategories.Add(new SubCategory() { CategoryId = newCategory.CategoryId, Name = newCategory.Name });
                catContext.SaveChanges();
            }
        }

        [HttpDelete]
        public void deleteRecordByID(int Id)
        {
            using (CategoryContext catContext = new CategoryContext())
            {
                SubCategory subCatToRemove = catContext.SubCategories.Where(subCat => subCat.Id == Id).FirstOrDefault();
                if (subCatToRemove != null)
                {
                    catContext.SubCategories.Remove(subCatToRemove);
                    catContext.SaveChanges();
                }
            }
        }

        [HttpPut]
        public void editRecordByID(SubCategory selectedCategory)
        {
            using (CategoryContext catContext = new CategoryContext())
            {
                SubCategory catToEdit = catContext.SubCategories.Where(subCat => subCat.Id == selectedCategory.Id).FirstOrDefault();
                if (catToEdit != null)
                {
                    catToEdit.Name = selectedCategory.Name;
                    catContext.SaveChanges();
                }
            }
        }
    }
}
