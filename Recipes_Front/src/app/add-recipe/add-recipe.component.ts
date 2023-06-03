import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { User } from 'src/models/User';
import swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  newRecipe: Recipe;
  arrCategories: Category[];
  images:String[]=["../../assets/add/1.jpg","../../assets/add/2.jpg","../../assets/add/3.jpg","../../assets/add/4.jpg","../../assets/add/5.jpg","../../assets/add/6.jpg","../../assets/add/7.jpg","../../assets/add/8.jpg","../../assets/add/9.jpg"]

  constructor(public recipeServ: RecipeService, public cateServ: CategoryService) { }

  ngOnInit(): void {
    this.newRecipe = new Recipe(0, "", 5, 30, 2, new Date(), [""], [""], "", "");
    let uc = sessionStorage.getItem("currentUser");
    if (uc != null)
      this.newRecipe.UserCode = JSON.parse(uc).Password;

    this.recipeServ.getId().subscribe(
      d => { this.newRecipe.Code = d + 1; }
      , e => { console.log(e); }
    );

    this.cateServ.getCategory().subscribe(
      d => {
        this.arrCategories = d;
        console.log(d)
      },
      e => { console.log(e) }
    )

  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  addString(arr: String[]) {

    if ((arr[arr.length - 1] != ""))
      arr.push("");
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] === "")
        arr.splice(index, 1);
    }
  }

  save() {
    this.remove(this.newRecipe.Ingreadients);
    this.remove(this.newRecipe.Introductions);
    this.recipeServ.addRecipe(this.newRecipe).subscribe(
      d => {
        console.log(d);
        swal.fire("saccess", "the recipe addad.", 'success');
      }
      , e => {
        console.log(e);
        swal.fire("conflict", "the recipe is already exist.", 'warning');
      }
    );
    this.ngOnInit();
  }

  remove(arr: String[]) {
    if (arr[arr.length - 1] === "")
      arr.splice(arr.length - 1);
  }

}
