import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodAppiService {
  key = "bf9c6062193a4a73a771c6fbe63f93b0"

  constructor(private http: HttpClient) { }

  public getRecipe(text: String) 
  {
  return this.http.get('https://api.spoonacular.com/recipes/search?apiKey='+this.key+'&number=1&query='+text);
  }
}
