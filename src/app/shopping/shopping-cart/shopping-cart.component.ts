import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  ingredientName = '';
  ingredientAmount = 0;
  //@Output('onAddIngredient') newIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.shoppingService.addIngredients(newIngredient);
  }

}
