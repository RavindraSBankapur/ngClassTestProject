import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

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
  //calls json service
  getShippingPrices() {
    this.http.get("./assets/shipping.json");
  }
}
