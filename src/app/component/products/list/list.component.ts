import { Product } from './../../../model/product.model';
import { User } from './../../../model/user.model';
import { AddtocartComponent } from './../addtocart/addtocart.component';
import { CartService } from './../../../service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 // Declare your variable:
 public products:any;
 public purchase:any;
 public select:any;
 public userInfo:any;
 public loggedIn:boolean=false;
//  public p:string[] = [];
 public cart: Cart = {
  tx:0,
  pname:'',
  pprice:0,
  pquant:0
}

 


  public viewMode:string = 'default';
  // public currentDateTime = new Date();
  // public currentCart:any;
  // public retrieveCart:string[]=[];

  constructor(
    private productSrv:ProductService,
    private cartSrv:CartService,
    private router:Router,
    ){}


  // 2. Load the data oninit
  ngOnInit(): void {

    if(sessionStorage.getItem("user")!=null){
      this.userInfo = sessionStorage.getItem("user");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    // For 1b:
    this.products = this.productSrv.getProducts().subscribe(data=>{
      console.log(data);
      // Put your data into the products array which is used to render the cards in your html
      this.products = data;

    }, errors=>{
      console.log(errors);
    });

    // For both:
    console.log(this.products);
  }

  public updateproduct:any;
  public message:string='';
  onAdd(product:any){
    console.log("Add to cart triggered for :"+product.name);
    console.log("Item is $:"+product.price);
    console.log("Item ID is: "+product.id);
    let remain = (product.pquant)-1;
    console.log("Quantity of product remaining: "+remain);

    this.cart.tx = product.id;
    this.cart.pname = product.name;
    this.cart.pprice = product.price;
    this.cart.pquant = 1;

    this.updateproduct = product;
    this.updateproduct.id = product.id;
    this.updateproduct.pquant = remain;
    console.log(this.updateproduct);
    
    // Update the amount of product remaining in the database:
    this.productSrv.updateProduct(this.updateproduct).subscribe(res=>{
      console.log("updated remaining product amount in DB");
    });
  
    
    console.log(this.cart);

    this.cartSrv.addToCart(this.cart).subscribe(res=>{
      console.log("Cart has been successfully updated.");
      this.router.navigateByUrl("/cart");
      this.message = "Product "+this.cart+" has successfully been added to cart!";
    });
    return this.message;

  }

}

  interface Cart {
    tx:number,
    pname:string,
    pprice:number,
    pquant:number
  }


