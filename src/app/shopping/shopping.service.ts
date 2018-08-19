import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Sugar', 3)
    ];

    getAllIngredients() {
        return this.ingredients;
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

}