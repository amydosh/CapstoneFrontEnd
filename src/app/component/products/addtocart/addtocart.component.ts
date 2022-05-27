import { CheckoutService } from './../../../service/checkout.service';
import { CartService } from './../../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  // Declare your variable:
  public products:any;
  public cart:any;
  public items:Cart[]=[];
  public viewMode:string = 'default';
  public currentDateTime = new Date();
  public totalPrice:number=0;
  public i:number=0;
  public item:any;
  public cItem:any;
  public currentTotal:number=0;
  public userInfo:any;
  public loggedIn:boolean=false;
  public updateproduct:any;

  constructor(
    private cartSrv:CartService,
    private checkoutSrv:CheckoutService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ){}


  // // 2. Load the data oninit
  ngOnInit(): void {
    if(sessionStorage.getItem("user")!=null){
      this.userInfo = sessionStorage.getItem("user");
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    

    this.cart = this.cartSrv.getCart().subscribe(data=>{
      console.log(data);
      this.cart = data;
      console.log(this.cart.length);
      for(let c=0; c<this.cart.length; c++){
        let cItem = this.cart[c];
        console.log(cItem);
        let itemPrice = cItem.ticketprice;
        console.log(itemPrice);
        let itemImg = cItem.img;
        console.log(itemImg);
        this.totalPrice = itemPrice + this.totalPrice;
        console.log(this.cart);
        console.log(this.cart[c]);
        console.log(this.totalPrice);
      }
    }, errors=>{
      console.log(errors);
    });
    console.log(this.items);
  }

    
  
  onEdit(product:any){
      this.cartSrv.updateCart(product).subscribe(res=>{
      // console.log(res);
      this.router.navigateByUrl('/cart');
      console.log("Cart was successfully updated");
      
    });
    // console.log("Edit triggered for : "+product);
    // this.router.navigateByUrl('/products/update', {state: product})
  }

  public message:string='';
  onDelete(tx:any){
    console.log(tx);
    console.log("Testing removal of item: "+tx);
    this.cartSrv.deleteFromCart(tx).subscribe(res=>{
      console.log("Removed item: "+tx+" from the cart");
      this.router.navigateByUrl('/cart');
      this.message = "Item successfully removed from cart.";

    })

  }

  onCheckout(cart:any){
    this.checkoutSrv.checkout(cart).subscribe(res=>{
      // this.router.navigateByUrl("/")
      console.log("Checkout Initiated");

    })
    
  }

}

interface Cart {
  tx:number,
  pname:string,
  pprice:number
}




// --> ----------------------------------------------------------------------
// public status:any;
// public cartForm : FormGroup;
// public submitted: boolean = false;

// constructor(
//   private formBuilder : FormBuilder,
//   private cartSrv : CartService,
//   private router:Router,
//   private activatedRoute: ActivatedRoute
//   ) {
//     this.cartForm = this.formBuilder.group({
//       tx : [null, [Validators.required]],
//       product : ['', [Validators.required]],
//       price: [null, [Validators.required]]
//     });

// }

// ngOnInit(): void {
//   this.status = this.activatedRoute.paramMap.pipe(()=>window.history.state);
//   console.log(this.status);
//   this.cartForm.patchValue(this.status);
  
// }

// public onSubmit(cartForm:any) {
//   if(cartForm.valid){
//     console.log(this.cartForm.value);

//     // Write logic to create a product:
//     this.cartSrv.updateCart(this.cartForm.value).subscribe(res=>{
//       // console.log(res);
//       this.router.navigateByUrl('/cart');
//       console.log("Cart was successfully updated");
      
//     });


//   } else{
//     console.log("Invalid Form !");
//     this.validate(cartForm);
//   }
// }

// public validate(form:any){
//   Object.keys(form.controls).forEach(field => {
//     const control = form.controls[field];
//     if(control instanceof FormControl){
//       control.markAsTouched({ onlySelf: true});
//     } else{
//       this.validate(control);
//     }
//   });
// }

// hasError(fieldName:any) {
//   let field = this.cartForm.get(fieldName);
//   return (field?.invalid && field?.touched && field?.errors);
// }

// get form() {
//   return this.cartForm.controls;
// }

// get tx() {
//   return this.form['tx'];
// }

// get pname() {
//   return this.form['pname'];
// }

// get pprice() {
//   return this.form['pprice'];
// }



