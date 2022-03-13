import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/products";

  // Get all products
  public getProducts(){
    return this.httpClient.get(this.url);
  }

  // Get one product
  // public getProduct(id:number){
  //   this.httpClient.get(this.url);
  // }

  // Add product
  public addProduct(product:any){
    return this.httpClient.post(this.url,product);
  }

  // Update product
  public updateProduct(product:any){
    return this.httpClient.put(`${this.url}/${product.id}`,product);
  }

  // Delete product
  public deleteProduct(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
