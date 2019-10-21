import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {

  constructor() { }
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
