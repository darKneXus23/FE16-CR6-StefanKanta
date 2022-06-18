import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  checkoutForm = this.fb.group({
    name: "",
    address:"",
  });
  constructor(private cartService: CartService, private fb: FormBuilder) { }

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }
  
   onSubmit() {
    window.alert('Your order has been submitted')
    console.warn(this.checkoutForm.value, this.items, this.totalSer);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.cartTotal();
    this.serviceT = (this.total * 0.1);
    this.dis = this.total + this.serviceT;
    if (this.dis >= 40) {
      this.discount = this.dis * 0.15;
    };
    this.totalSer = (this.dis - this.discount);
  }
  ngDoCheck(): void {
    if (this.items.length < 1) {
      this.total = 0;
      this.serviceT = 0;
      this.discount = 0;
      this.totalSer = 0;
      this.dis = 0;
    }
      
  }
}
