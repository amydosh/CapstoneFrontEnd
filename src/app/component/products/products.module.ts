
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { DataService } from 'src/app/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SummaryPipe } from 'src/app/pipe/summary.pipe';
import { ProductService } from 'src/app/service/product.service';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DetailsComponent,
    SummaryPipe,
    AddtocartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[DataService,SummaryPipe]
})
export class ProductsModule { }
