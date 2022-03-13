import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListusersComponent implements OnInit {


 // Declare your variable:
//  public admins:any;
// public viewMode:string = 'product';
public users:any;
//  public currentDateTime = new Date();
// public bgColor:string='grey';

// 1a. Inject the data service to load the data:
// constructor(private dataSrv:DataService) { }

// 1b. Use your Product Service --> springboot
constructor(
  private userSrv:UserService,
  private router:Router
  ){}

// 2. Load the data oninit
ngOnInit(): void {
  
  // For 1a:
 //  this.products = this.dataSrv.products;

  // For 1b:
  this.users = this.userSrv.getUsers().subscribe(data=>{
    console.log(data);
    // Put your data into the products array which is used to render the cards in your html
    this.users = data;
  }, errors=>{
    console.log(errors);
  });

  // For both:
  console.log(this.users);
  
}

onEdit(user:any){
  console.log("Edit triggered for : "+user);
  this.router.navigateByUrl('/users/update', {state: user})
}


onDelete(id:number){
  console.log("Delete triggered for : "+id);
  this.userSrv.deleteUser(id).subscribe(res=>{
    console.log("User has been successfully deleted");
    
  })
}



}
