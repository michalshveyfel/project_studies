import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = "https://localhost:44316/api/recipe/";
  constructor(public http: HttpClient) { }

  getAllRecipes() {
    return this.http.get<Recipe[]>(this.baseUrl + "GetAllRecipes");
  }

  addRecipe(n: Recipe) {
    return this.http.post<Recipe>(this.baseUrl + "AddNewRecipe", n);
  }

  getId() {
    return this.http.get<number>(this.baseUrl + "GetId");
  }

  getRecipe(id: number) {
    return this.http.get<Recipe>(this.baseUrl + "GetRecipe?id=" + id);
  }

  deleteRecipe(r: Recipe) {

    return this.http.delete<Recipe>(this.baseUrl + "DeleteRecipe?recipeId=" + r.Code);
  }
}
