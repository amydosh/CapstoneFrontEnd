import { CheckoutComponent } from './../checkout/checkout.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

const routes =[
  { path:'products', component:ProductsComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent},
  { path:'list', component:ListComponent},
  { path:'details', component:DetailsComponent},
  { path:'checkout', component:CheckoutComponent},
  { path:'cart', component:AddtocartComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
