import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateusersComponent implements OnInit {

  public status:any;
  public userForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private userSrv : UserService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.userForm = this.formBuilder.group({
        firstName : ['', [Validators.required]],
        lastName : ['', [Validators.required]],
        password: ['', [Validators.required]],
        email: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: [null, Validators.required],
        agree: [false, Validators.required],
        id: [null, Validators.required]
      });

  }

  ngOnInit(): void {
    this.status = this.activatedRoute.paramMap.pipe(()=>window.history.state);
    console.log(this.status);
    this.userForm.patchValue(this.status);
    
  }

  public onSubmit(userForm:any) {
    if(userForm.valid){
      console.log(this.userForm.value);

      // Write logic to create a product:
      this.userSrv.updateUser(this.userForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl('/users');
        console.log("User was successfully updated");
        
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

  get firstName() {
    return this.form['firstName'];
  }

  get lastName() {
    return this.form['lastName'];
  }

  get password() {
    return this.form['password'];
  }

  get email() {
    return this.form['email'];
  }

  get state() {
    return this.form['state'];
  }

  get zipcode() {
    return this.form['zipcode'];
  }

  get agree() {
    return this.form['agree'];
  }


}


