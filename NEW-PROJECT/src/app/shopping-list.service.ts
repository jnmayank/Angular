
import { EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

export class ShoppingListService {

    private ingredients:Ingredient[] = [
        new Ingredient('Apple',90),
        new Ingredient('Tomato', 40)
    ];

    ingredientAdded = new EventEmitter<Ingredient[]>();

    // getIngredients() : Ingredient[]{
    //     return this.ingredients;
    // }

    // addIngredient(ingredient : Ingredient) {
    //     this.ingredients.push(ingredient);
    // }

    getIngredients() : Ingredient[]{
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }



}