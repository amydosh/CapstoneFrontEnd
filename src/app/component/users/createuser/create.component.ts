import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateuserComponent implements OnInit {

  public userForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private userSrv : UserService,
    private router:Router
    ) {
    this.userForm = this.formBuilder.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: [null, Validators.required],
      agree: [false, Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(userForm:any) {
    if(userForm.valid){
      console.log(this.userForm.value);

      // Write logic to create a product:
      this.userSrv.addUser(this.userForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/users");
        console.log("User was successfully created");
        
      });


    } else{
      console.log("Invalid Form !");
      this.validate(userForm);
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
    let field = this.userForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.userForm.controls;
  }

  // get id() {
  //   return this.form['id'];
  // }

  // get name() {
  //   return this.form['name'];
  // }

  // get description() {
  //   return this.form['description'];
  // }
}








