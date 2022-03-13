import { AdminService } from '../../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 public loginForm : FormGroup;
 public message:string="";

  constructor(private formBuilder : FormBuilder, private adminSrv:AdminService, private router:Router) {

    this.loginForm = this.formBuilder.group({
      adminUN : ['', [Validators.required]],
      adminPW: ['', [Validators.required]],
      rememberme:['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm:any) {
    if(loginForm.valid){
      console.log(this.loginForm.value);      
      this.adminSrv.getAdminByAdminUN(this.adminUN.value).subscribe((res:any)=>{
        if(res!=null && res!=undefined && res.length!=0){
          if(res[0].adminPW === (this.adminPW.value)){
            // console.log("Login Successful!");
            // localStorage.setItem("user",JSON.stringify(res[0]));

            // Session storage preferred over localStorage
            sessionStorage.setItem("admin",JSON.stringify(res[0]));
            this.router.navigateByUrl("/admindash");
          }else{
            this.message="Passwords do not match!";
            console.log("Password incorrect!");
          }
        } else{
          this.message = "Admin does not exist!";
          console.log("Admin does not exist!");
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

  hasError(fieldName:any) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.loginForm.controls;
  }

  get adminUN() {
    return this.form['adminUN'];
  }

  get adminPW() {
    return this.form['adminPW'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }
}