import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];
  total:number = 0;
  serviceT:number = 0;
  discount:number = 0;
  totalSer:number = 0;
  dis:number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.cartTotal();
    this.serviceT = (this.total * 0.1);
    this.dis = this.total + this.serviceT;
    if (this.dis >= 20) {
      this.discount = this.dis * 0.15;
    };
    this.totalSer = (this.dis - this.discount);
  }
}
