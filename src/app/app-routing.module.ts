import { LogoutComponent } from './component/logout/logout.component';
import { PurchaseComponent } from './component/purchase/purchase.component';
import { CheckoutComponent } from './component/products/checkout/checkout.component';

import { AdminRoutingModule } from './component/admin/admin-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductRoutingModule } from './component/products/product-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { UserRoutingModule } from './component/users/user-routing.module';

//1. define routes
const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'checkout', component:CheckoutComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'purchasecomplete', component:PurchaseComponent},
  { path:'logout', component:LogoutComponent},
  { path:'admin', loadChildren: ()=> import('./component/admin/admin-routing.module').then(m=> m.AdminRoutingModule)},
  { path:'users', loadChildren: ()=> import('./component/users/user-routing.module').then(m=> m.UserRoutingModule)},
  { path:'products', loadChildren: ()=> import('./component/products/product-routing.module').then(m=> m.ProductRoutingModule)},
  { path:'**', component:NotFoundComponent }
];

//2. register routes
@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule, UserRoutingModule, AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
