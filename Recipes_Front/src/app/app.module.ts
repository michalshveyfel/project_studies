import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import "@angular/compiler";
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { LevelPipe } from './level.pipe';
import { MatIconModule } from "@angular/material/icon";
import { FilterRecipeComponent } from './filter-recipe/filter-recipe.component';
import { TimePipe } from './time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    SmallRecipeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    LevelPipe,
    FilterRecipeComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
