import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, /* apenas path '' dá match com todos os
                                                                paths, pois todos tem ''. Com o full, apenas
                                                                paths que são totalmente iguais ao path são
                                                                considerados */
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping', component: ShoppingComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
