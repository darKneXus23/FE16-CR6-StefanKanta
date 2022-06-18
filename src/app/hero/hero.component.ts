import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  count: number = 0;
  constructor(private CS : CartService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.count = this.CS.itemsLength();
  }
}
