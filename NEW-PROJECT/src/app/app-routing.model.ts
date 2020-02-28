import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe', pathMatch: 'full'},
    { path: 'recipe', component: RecipesComponent},
    { path: 'shoppinglist', component: ShoppingListComponent}
  ];

  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes) // registering the routes.
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}