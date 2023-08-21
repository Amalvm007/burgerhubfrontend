import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { ShawarmaMenuComponent } from './shawarma-menu/shawarma-menu.component';
import { StartersMenuComponent } from './starters-menu/starters-menu.component';
import { BurgerViewComponent } from './burger-view/burger-view.component';
import { SandwichViewComponent } from './sandwich-view/sandwich-view.component';
import { ShawarmaViewComponent } from './shawarma-view/shawarma-view.component';
import { StartersViewComponent } from './starters-view/starters-view.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // path for allproducts
  {path:'' , component:AllProductsComponent},
  //  path for cart
  {path:'cart', component:CartComponent},
  // path for view-product
  {path:'view-products/:id', component:ViewProductsComponent},
  // path for about
  {path:'about', component:AboutComponent},
  // path for burger-menu
  {path:'burger', component:BurgerMenuComponent},
  // path for burger-view
  {path:'burger/burger-view/:id',component:BurgerViewComponent},
  // path for sandwich-menu
  {path:'sandwich', component:SandwichMenuComponent},
  // path for sandwich-view
  {path:'sandwich/sandwich-view/:id',component:SandwichViewComponent},
  // path for shawarma-menu
  {path:'shawarma', component:ShawarmaMenuComponent},
  // path for shawarma-view
  {path:'shawarma/shawarma-view/:id',component:ShawarmaViewComponent},
  // path for starters-menu
  {path:'starters', component:StartersMenuComponent},
  // path for starters-view
  {path:'starters/starters-view/:id',component:StartersViewComponent},
  // // path for register
  {path:'register',component:RegisterComponent},
  // path for login
  {path:'login',component:LoginComponent},
  // path for admin
  {path:'admin',component:AdminComponent},
  // path for page not found
  {path:'**', component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
