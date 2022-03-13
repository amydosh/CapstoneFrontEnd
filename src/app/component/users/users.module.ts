import { ListusersComponent } from './listusers/list.component';
import { DetailsuserComponent } from './detailsuser/details.component';
import { UpdateusersComponent } from './updateusers/update.component';
import { CreateuserComponent } from './createuser/create.component';

import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from 'src/app/service/user.service';



@NgModule({
  declarations: [
    UsersComponent,
    CreateuserComponent,
    UpdateusersComponent,
    DetailsuserComponent,
    ListusersComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
