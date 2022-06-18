import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];

  constructor() { }

  addToCart(product: IProducts) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return  this.items;
  }
  cartTotal(){
    let tAmount: number = 0;
    for(let val of this.items){
      tAmount = val.price + tAmount;
    }
    return tAmount;
  }
  itemsLength(){
    return this.items.length;
  }
}
