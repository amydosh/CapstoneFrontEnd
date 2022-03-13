import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public state:any;
  public productForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private productSrv : ProductService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.productForm = this.formBuilder.group({
      id : [null, [Validators.required , Validators.minLength(6), Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      // description:['', Validators.required],
      price:[null, Validators.required],
      img:['',Validators.required],
      pquant:[null, Validators.required]
    });

  }

  ngOnInit(): void {
    this.state = this.activatedRoute.paramMap.pipe(()=>window.history.state);
    console.log(this.state);
    this.productForm.patchValue(this.state);
    
  }

  public onSubmit(productForm:any) {
    if(productForm.valid){
      console.log(this.productForm.value);

      // Write logic to create a product:
      this.productSrv.updateProduct(this.productForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl('/admindash');
        console.log("Product was successfully updated");
        
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

  get price(){
    return this.form['price'];
  }

  get img(){
    return this.form['img'];
  }

  get pquant(){
    return this.form['pquant'];
  }
}


