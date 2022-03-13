import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateuserComponent } from './createuser/create.component';
import { UpdateusersComponent } from './updateusers/update.component';
import { ListusersComponent } from './listusers/list.component';
import { DetailsuserComponent } from './detailsuser/details.component';
import { RouterModule } from '@angular/router';

const routes =[
  { path:'users', component:UsersComponent},
  { path:'create', component:CreateuserComponent},
  { path:'update', component:UpdateusersComponent},
  { path:'list', component:ListusersComponent},
  { path:'details', component:DetailsuserComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
