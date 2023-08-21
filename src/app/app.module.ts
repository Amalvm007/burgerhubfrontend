import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { ShawarmaMenuComponent } from './shawarma-menu/shawarma-menu.component';
import { StartersMenuComponent } from './starters-menu/starters-menu.component';
import{HttpClientModule} from '@angular/common/http';
import { BurgerViewComponent } from './burger-view/burger-view.component';
import { SandwichViewComponent } from './sandwich-view/sandwich-view.component';
import { ShawarmaViewComponent } from './shawarma-view/shawarma-view.component';
import { StartersViewComponent } from './starters-view/starters-view.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllProductsComponent,
    ViewProductsComponent,
    CartComponent,
    PageNotFoundComponent,
    AboutComponent,
    BurgerMenuComponent,
    SandwichMenuComponent,
    ShawarmaMenuComponent,
    StartersMenuComponent,
    BurgerViewComponent,
    SandwichViewComponent,
    ShawarmaViewComponent,
    StartersViewComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
