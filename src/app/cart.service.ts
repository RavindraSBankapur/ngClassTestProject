import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items = [];
  constructor() {}

  // add product to cart
  addToCart(product) {
    this.items.push(product);
  }

  //get product fromt the cart
  getItems() {
    return this.items;
  }

  //remove product from the cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}
