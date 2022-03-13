
import { User } from './../../model/user.model';
import { CheckoutService } from './../../service/checkout.service';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 // Declare your variable:
 public products:any;
 public cart:any;
 public items:Cart[]=[];
 public purchase: Purchase = {
  tx:0,
  numitems:0,
  userinfo:'',
  total:0
}
 public viewMode:string = 'default';
 public currentDateTime = new Date();
 public totalPrice:number=0;
 public i:number=0;
 public x:number=0;
 public item:any;
 public cItem:any;
 public currentTotal:number=0;
 public userInfo:any;
 public loggedIn:boolean=false;
//  public checkoutForm : FormGroup;

 constructor(
   private formBuilder:FormBuilder,
   private cartSrv:CartService,
   private checkoutSrv:CheckoutService,
   private router:Router,
   private activatedRoute:ActivatedRoute
   ){
  //    this.checkoutForm = this.formBuilder.group({
  //   id : ['', [Validators.required]],
  //   name: ['', [Validators.required]],
  //   description: ['', Validators.required],
  //   price: ['', Validators.required]
  // });
}


 // // 2. Load the data oninit
 ngOnInit(): void {
   if(sessionStorage.getItem("user")!=null){
     this.userInfo = sessionStorage.getItem("user");
     this.loggedIn = true;
   } else {
     this.loggedIn = false;
   }
   console.log(this.loggedIn);

   this.cart = this.cartSrv.getCart().subscribe(data=>{
     console.log(data);
     this.cart = data;
     console.log("Number of items in cart is: "+this.cart.length);
     for(let c=0; c<this.cart.length; c++){
       let cItem = this.cart[c];
       console.log(cItem);
       let itemPrice = cItem.pprice;
       console.log("Item Price: "+itemPrice);
       this.totalPrice = itemPrice + this.totalPrice;
      //  console.log(this.cart);
      //  console.log(this.cart[c]);
       console.log("Total Price: $"+this.totalPrice);
     }
   }, errors=>{
     console.log(errors);
   });
  //  console.log(this.items);
 }

 public message:string='';
  onCheckout(cart:any){
    console.log("Add to cart triggered for :"+this.cart);
    var x:number=0;
    console.log("There are "+this.cart.length+" products in the cart.");
    this.purchase.numitems = this.cart.length;
    this.purchase.userinfo = this.userInfo;
    this.purchase.total = this.totalPrice;
    console.log(this.purchase);
    
    // for(x=0; x<this.cart.length; x++){
    //   console.log(this.cart[x].pname);
    // }
 
    // console.log(this.purchase);
    this.checkoutSrv.checkout(this.purchase).subscribe(res=>{
      console.log("Purchase has been successfully updated.");
      this.router.navigateByUrl("/purchasecomplete");
      
      // this.message = "Your purchase "+this.cart+" has successfully been added to cart!";
    });
    for(let d=1; d<(this.cart.length+1); d++){
      console.log(this.cart.length);
      
      this.cartSrv.deleteFromCart(d).subscribe(res=>{
        console.log("Cart has been cleared.");
        
      });
    }
    
    // return this.message;

  }
}

  interface Purchase {
    tx:number,
    numitems:number,
    total:number,
    userinfo:string
  }

interface Cart {
  tx:number,
  pname:string,
  pprice:number
}
