import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  recipeList: Recipe[];
  constructor(public recipeServ: RecipeService) {
  }

  getRecipies() {
    this.recipeServ.getAllRecipes().subscribe(d => { this.recipeList = d }, e => { console.log(e) });
  }
  
  ngOnInit(): void {
    this.getRecipies();
  }

}
