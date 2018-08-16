import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  ingredientName = '';
  ingredientAmount = 0;
  @Output('onAddIngredient') newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    console.log('here');
    this.newIngredient.emit(new Ingredient(this.ingredientName, this.ingredientAmount));
  }

}
