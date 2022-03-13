import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmindashComponent } from './admindash/admindash.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';



@NgModule({
  declarations: [
    AdminloginComponent,
    AdmindashComponent,
    ManageusersComponent,
    UpdateadminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[DataService]
})
export class AdminModule { }