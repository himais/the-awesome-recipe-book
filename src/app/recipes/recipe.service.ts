import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("The new recipe 0", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"),
        new Recipe("The new recipe 1", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"),
        new Recipe("The new recipe 2", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"),
        new Recipe("The new recipe 3", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80")
    ];
    public selectedRecipe = new EventEmitter<Recipe>();

    getAllRecipes() {
        return this.recipes;
    }
}
