import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Recipe } from 'src/models/Recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-filter-recipe',
  templateUrl: './filter-recipe.component.html',
  styleUrls: ['./filter-recipe.component.css']
})
export class FilterRecipeComponent implements OnInit {

  arrFilter: Recipe[];
  arrFilterAll: Recipe[];
  arrCategories: Category[];
  levelFilter: number;
  categoryFilter: number;
  timeFilter: number;

  constructor(public recipeServ: RecipeService, public cateServ: CategoryService) { }

  filterArr() {
    console.log(this.levelFilter);
    console.log(this.arrFilter);
    this.arrFilter=this.arrFilterAll;
    if (this.levelFilter != null)
      this.arrFilter = this.arrFilterAll.filter((item, index) => { return item.Level == this.levelFilter; });
    if (this.timeFilter != null)
      this.arrFilter = this.arrFilter.filter((item, index) => { return item.MinutesToMake <= this.timeFilter });
    if (this.categoryFilter != null) {
      this.arrFilter = this.arrFilter.filter((item, index) => { return (this.categoryFilter == item.CategoryCode); });
    }
  }

  ngOnInit(): void {
    this.recipeServ.getAllRecipes().subscribe(
      d => { this.arrFilter = d; this.arrFilterAll = d; }
    );

    this.cateServ.getCategory().subscribe(
      d => {
        this.arrCategories = d;
        console.log(d)
      },
      e => { console.log(e) }
    );
  }
}
