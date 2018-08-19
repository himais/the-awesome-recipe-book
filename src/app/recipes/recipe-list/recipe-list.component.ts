import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output('onRecipeSelected') selectedRecipetoShow = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  // onRecipeSelected(recipe: Recipe) {
  //   this.selectedRecipetoShow.emit(recipe);
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
