import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "aboutus", component: AboutusComponent
  },{
    path: "menu", component: MenuComponent
  },{
    path: "menu/products/:productId", component: DetailsComponent
  },{
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
