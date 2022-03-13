import { CheckoutService } from './service/checkout.service';
import { CartService } from './service/cart.service';
import { AdminModule } from './component/admin/admin.module';
import { UsersModule } from './component/users/users.module';
import { SummaryPipe } from 'src/app/pipe/summary.pipe';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OneWayComponent } from './component/data/one-way/one-way.component';
import { TwoWayComponent } from './component/data/two-way/two-way.component';
import { CssBindingComponent } from './component/data/css-binding/css-binding.component';
import { EventBindingComponent } from './component/data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsModule } from './component/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { HighlightDirective } from './directive/highlight.directive';
import { InputformatterDirective } from './directive/inputformatter.directive';
import { PurchaseComponent } from './component/purchase/purchase.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    OneWayComponent,
    TwoWayComponent,
    CssBindingComponent,
    EventBindingComponent,
    NotFoundComponent,
    HighlightDirective,
    InputformatterDirective,
    PurchaseComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    AdminModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, SummaryPipe, CartService, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
