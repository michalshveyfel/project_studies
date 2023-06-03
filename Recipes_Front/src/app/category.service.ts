import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) { }
  baseUrl="https://localhost:44316/api/category/";

  getCategory()
  {
    return this.http.get<Category[]>(this.baseUrl+"GetAllCategories");
  }

  getById(code:number)
  {
    return this.http.get<Category>(this.baseUrl+`GetCategory?id=${code}`);
  }
}
