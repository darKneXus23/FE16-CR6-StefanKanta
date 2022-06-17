import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { products } from '../products';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    window.alert("Product added to cart")
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }

}
