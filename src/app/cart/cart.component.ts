// import { Component, OnInit } from "@angular/core";
// import { CartService } from "../cart.service";
// @Component({
//   selector: "app-cart",
//   templateUrl: "./cart.component.html",
//   styleUrls: ["./cart.component.css"]
// })
// export class CartComponent implements OnInit {
//   items = this.cartService.getItems();
//   constructor(private cartService: CartService) {}

//   ngOnInit() {}
// }

import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {}

  // this is to demonstrate router by angular Router
  routeTo404() {
    this.router.navigateByUrl("**");
  }
  routeTo500() {}
  routeToGeneric() {}
}
