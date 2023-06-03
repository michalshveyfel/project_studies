import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {



  @Input()
  myRecipe: Recipe;

  
  IsUserEnter()
  {
    let uc = sessionStorage.getItem("currentUser");     
   return uc!=null;
  }

  
  detailed(item:Recipe){
    this.rout.navigate(['/recipe-details',item.Code]);
  }


  constructor(public rout:Router) { }

  ngOnInit(): void {
  }

}
