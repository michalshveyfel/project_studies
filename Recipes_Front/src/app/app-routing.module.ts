import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FilterRecipeComponent } from './filter-recipe/filter-recipe.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register/:username', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'recipe-details/:myId', component: RecipeDetailsComponent },
  { path: 'filter', component: FilterRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
