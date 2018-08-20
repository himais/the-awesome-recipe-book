import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; OR
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //or this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

}
