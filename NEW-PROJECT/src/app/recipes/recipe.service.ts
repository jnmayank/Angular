import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('Upma', 'Quicky Healthy Upma', 
        'https://www.cubesnjuliennes.com/wp-content/uploads/2019/06/Best-South-Indian-Rava-Upma-recipe.jpg',
        [
          new Ingredient('Rava', 50),
          new Ingredient('Ghee',1)
        ])
      ];

    recipeSelected  = new EventEmitter<Recipe>();

    constructor(private shoppingListService : ShoppingListService){}

    getRecipes() : Recipe[]  {
        return this.recipes.slice();
    }

    addIngredient(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}