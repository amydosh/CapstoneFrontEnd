import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes =[
  { path:'adminlogin', component:AdminloginComponent},
  { path:'admindash', component:AdmindashComponent},
  { path:'updateadmin', component:UpdateadminComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
