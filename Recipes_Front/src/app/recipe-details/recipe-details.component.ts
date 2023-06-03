import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  id: number;
  myRecipe: Recipe = new Recipe(32, "cvb", 1, 43, 3, new Date(), ["fd", "dsfg"], ["fdsvgb", "dsf"], "1", "../../assets/cake.JPG");
  myCat: Category = new Category(21, "dsf", "fd");
  constructor(public catServ: CategoryService, public recipeServ: RecipeService, public active: ActivatedRoute, public rout: Router) {
    this.active.params.subscribe(
      (pa) => {
        this.id = pa.myId;
      }
    );
  }

  ngOnInit(): void {
    
    this.recipeServ.getRecipe(this.id).subscribe(
      d => {
        this.myRecipe = d;
        console.log(this.myRecipe);
        this.catServ.getById(this.myRecipe.CategoryCode).subscribe(
          d => {
            this.myCat = d;
            console.log(this.myCat);
          }
        );
      }
    )
  }

  IsCurrentUser() {
    let uc = sessionStorage.getItem("currentUser");
    if (uc != null)
      return this.myRecipe.UserCode === JSON.parse(uc).Password;
    return false;
  }

  deleteRecipe() {
    this.recipeServ.deleteRecipe(this.myRecipe).subscribe(
      d => {
        Swal.fire("deleted", "המתכון נמחק בהצלחה", "info");
        this.rout.navigate(["/all-recipes"]);
      },
      e => {
        Swal.fire("not found", "the recipe does not exist", "error");
      }
    )
  }
}