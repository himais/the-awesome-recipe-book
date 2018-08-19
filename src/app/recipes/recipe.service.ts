import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("Japanese ramen",
            "A super tasty ramen!",
            "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71cdddf5cc615224cf2c26614d20154d&auto=format&fit=crop&w=753&q=80",
            [
                new Ingredient('shoyu', 1),
                new Ingredient('meat', 2)
            ]
        ),
        new Recipe("Dumplings",
            "What else you need to say?",
            "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&s=aa5f954f8c3de6f8427e6f8ad35c0085&auto=format&fit=crop&w=750&q=80",
            [
                new Ingredient('flour', 1),
                new Ingredient('meat', 2)
            ]
        )
    ];
    public selectedRecipe = new EventEmitter<Recipe>();

    getAllRecipes() {
        return this.recipes;
    }
}
