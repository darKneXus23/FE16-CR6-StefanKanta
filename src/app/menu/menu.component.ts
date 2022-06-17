import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products:IProducts[] = products;
  product: IProducts = {} as IProducts;
  id: number = 0;
  constructor(private route: ActivatedRoute, private cartService: CartService ) { }

  addToCart(i:number) {
    window.alert("Product added to cart")
    this.cartService.addToCart(this.products[i])
    console.log(this.products[i])
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      this.product = products[this.id];
    });
  }

}
