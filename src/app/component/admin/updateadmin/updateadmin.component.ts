import { AdminService } from './../../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  public status:any;
  public adminForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private adminSrv : AdminService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.adminForm = this.formBuilder.group({
        adminID : [null, [Validators.required]],
        adminUN : ['', [Validators.required]],
        adminPW: ['', [Validators.required]]
      });

  }

  ngOnInit(): void {
    this.status = this.activatedRoute.paramMap.pipe(()=>window.history.state);
    console.log(this.status);
    this.adminForm.patchValue(this.status);
    
  }

  public onSubmit(adminForm:any) {
    if(adminForm.valid){
      console.log(this.adminForm.value);

      // Write logic to create a product:
      this.adminSrv.updateAdmin(this.adminForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl('/admindash');
        console.log("Admin information was successfully updated");
        
      });


    } else{
      console.log("Invalid Form !");
      this.validate(adminForm);
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
    let field = this.adminForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.adminForm.controls;
  }

  get adminUN() {
    return this.form['adminUN'];
  }

  get adminPW() {
    return this.form['adminPW'];
  }


}
