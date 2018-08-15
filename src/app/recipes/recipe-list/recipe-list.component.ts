import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { 
    this.recipes.push(new Recipe("The new recipe", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"));
    this.recipes.push(new Recipe("The new recipe", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"));
    this.recipes.push(new Recipe("The new recipe", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"));
    this.recipes.push(new Recipe("The new recipe", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"));
    this.recipes.push(new Recipe("The new recipe", "the desc", "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aba7663f8f57d37a53706edff54fd1c6&auto=format&fit=crop&w=750&q=80"));
  }

  ngOnInit() {
  }

}
