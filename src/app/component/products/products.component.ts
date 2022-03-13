import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // Declare your variable:
  public products:any;
  public viewMode:string = 'default';
  public currentDateTime = new Date();
  // public bgColor:string='grey';

  // 1a. Inject the data service to load the data:
  // constructor(private dataSrv:DataService) { }

  // 1b. Use your Product Service --> springboot
  constructor(
    private productSrv:ProductService,
    private router:Router
    ){}

  // 2. Load the data oninit
  ngOnInit(): void {
    
    // For 1a:
    // this.products = this.dataSrv.products;

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

  onEdit(product:any){
    console.log("Edit triggered for : "+product);
    this.router.navigateByUrl('/products/update', {state: product})
  }


  onDelete(id:number){
    console.log("Delete triggered for : "+id);
    this.productSrv.deleteProduct(id).subscribe(res=>{
      console.log("Product has been successfully deleted");
      
    })
  }

}
