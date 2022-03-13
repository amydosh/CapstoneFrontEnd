import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm : FormGroup;
  public submitted: boolean = false;
  public message:string='';

  constructor(
    private formBuilder : FormBuilder,
    private productSrv : ProductService,
    private router:Router
    ) {
    this.productForm = this.formBuilder.group({
      id : ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  public onSubmit(productForm:any) {
    if(productForm.valid){
      console.log(this.productForm.value);

      // Write logic to create a product:
      this.productSrv.addProduct(this.productForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/admindash");
        console.log("Product was successfully created");
        this.message = "Product successfully created!"
        sessionStorage.setItem("adminmessage",this.message);
      });


    } else{
      console.log("Invalid Form !");
      this.validate(productForm);
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
    let field = this.productForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.productForm.controls;
  }

  get id() {
    return this.form['id'];
  }

  get name() {
    return this.form['name'];
  }

  get description() {
    return this.form['description'];
  }
}


