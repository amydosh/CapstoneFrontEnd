import { Product } from './../../model/product.model';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // export class LoginComponent implements OnInit, Cart, Product, User{

 public loginForm : FormGroup;
 public message:string="";
 public trialdata:string='';
//  public cart: Cart({});



//  public cart : Cart = new Cart[];
 

  constructor(private formBuilder : FormBuilder, private userSrv:UserService, private router:Router, private activatedRoute:ActivatedRoute) {

    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rememberme:['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any) {
    if(loginForm.valid){
      console.log(this.loginForm.value);
      this.userSrv.getUserByEmail(this.email.value).subscribe((res:any)=>{
        if(res!=null && res!=undefined && res.length!=0){
          if(res[0].password === (this.password.value)){
            console.log(res);
            console.log(this.email.value);
            sessionStorage.setItem("user",this.email.value);
            
            // console.log("Login Successful!");
            // localStorage.setItem("user",JSON.stringify(res[0]));
            // console.log(res.email);
            

            // --> Want to create a new Cart when the user logs in
            // this.Cart = new Cart;


            // Session storage preferred over localStorage
            // sessionStorage.setItem("cart",cart);
            // let userFname = res.firstName;
            // console.log(userFname);
            
            // sessionStorage.setItem("userfName",JSON.stringify(res[0]));
            // sessionStorage.setItem("user",JSON.stringify(res[0]));
            // let trialdata = sessionStorage.getItem("user");
            // console.log(trialdata);
            // let uname = JSON.parse(this.trialdata);
            
            // let trial = JSON.parse(this.trialdata);
            // this.cart = new Cart;

            this.router.navigateByUrl("/products/list");
          }else{
            this.message="Passwords do not match!";
            console.log("Password incorrect!");
          }
        } else{
          this.message = "User does not exist!";
          console.log("User does not exist!");
        }
      });
      // console.log(this.loginForm.value);
    } else{
      console.log("Invalid Form !");
      this.validate(loginForm);
    }
  }

  public validate(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.loginForm.controls;
  }

  get email() {
    return this.form['email'];
  }

  get password() {
    return this.form['password'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }


// public constructor(cart:Cart, product:Product, user:User){
//   super(cart);
//   this.
//   }
}