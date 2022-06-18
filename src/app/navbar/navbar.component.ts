import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  count: number = 0;
  constructor(private CS : CartService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.count = this.CS.itemsLength();
  }

}
