import { Component, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
    selector:'app-shopping-list-edit',
    templateUrl:'./shopping-list-edit.component.html',
    styleUrls:['./shopping-list-edit.component.css']
    
})
export class ShoppingListEditComponent {
    @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

    ingredient : Ingredient;
    //@Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor(private shoppingListService : ShoppingListService){}


    onAdd() {
        const newIngredient= new Ingredient(this.nameInput.nativeElement.value,
            this.amountInput.nativeElement.value);
        this.shoppingListService.addIngredient(newIngredient);
        //this.ingredientAdded.emit(newIngredient);
    }
}