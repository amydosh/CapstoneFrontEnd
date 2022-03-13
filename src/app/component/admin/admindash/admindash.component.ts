import { CheckoutService } from './../../../service/checkout.service';
import { AdminService } from './../../../service/admin.service';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {


 // Declare your variable:
//  public admins:any;
 public viewMode:string = 'product';
 public products:any;
 public purchases:any;
 public admins:any;
 public users:any;
 public adminmessage:any;
//  public currentDateTime = new Date();
 // public bgColor:string='grey';

 // 1a. Inject the data service to load the data:
 // constructor(private dataSrv:DataService) { }

 // 1b. Use your Product Service --> springboot
 constructor(
   private productSrv:ProductService,
   private checkoutSrv:CheckoutService,
   private router:Router,
   private userSrv:UserService,
   private adminSrv:AdminService
   ){}

 // 2. Load the data oninit
 ngOnInit(): void {
   this.adminmessage = sessionStorage.getItem("adminmessage");
   // For 1a:
  //  this.products = this.dataSrv.products;

   // For 1b:
   this.products = this.productSrv.getProducts().subscribe(data=>{
     console.log(data);
     // Put your data into the products array which is used to render the cards in your html
     this.products = data;
   }, errors=>{
     console.log(errors);
   });

   this.users = this.userSrv.getUsers().subscribe(data=>{
    console.log(data);
    // Put your data into the products array which is used to render the cards in your html
    this.users = data;
  }, errors=>{
    console.log(errors);
  });

  // --> Need to grab SPECIFIC admin info...

  this.admins = this.adminSrv.getAdmins().subscribe(data=>{
    console.log(data);
    this.admins = data;
  }, errors=>{
    console.log(errors);
  });

  this.purchases = this.checkoutSrv.getPurchases().subscribe(data=>{
    console.log(data);
    this.purchases = data;
  }, errors=>{
    console.log(errors);
  });

  // let adminmessage = sessionStorage.getItem("adminmessage");

  // For both:
  console.log(this.users);
  console.log(this.products);
  console.log(this.admins);
  console.log(this.purchases);
  
  
   
 }




 onEdit(product:any){
   console.log("Edit triggered for : "+product);
   this.router.navigateByUrl('/products/update', {state: product})
 }


 onDelete(id:number){
   console.log("Delete triggered for : "+id);
   this.productSrv.deleteProduct(id).subscribe(res=>{
     console.log("Product has been successfully deleted");
     
   })
 }

onEditUser(user:any){
  console.log("Edit triggered for : "+user);
  this.router.navigateByUrl('/users/update', {state: user})
}


onDeleteUser(id:number){
  console.log("Delete triggered for : "+id);
  this.userSrv.deleteUser(id).subscribe(res=>{
    console.log("User has been successfully deleted");
    
  })
}

onEditAdmin(admin:any){
  console.log("Edit triggered for : "+admin);
  this.router.navigateByUrl('/updateadmin', {state: admin})
}


onDeleteAdmin(id:number){
  console.log("Delete triggered for : "+id);
  this.adminSrv.deleteAdmin(id).subscribe(res=>{
    console.log("Admin account has been successfully deleted");
    
  })
}


}
