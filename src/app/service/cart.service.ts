import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public products = newArray<Product>(0);

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/cart";

  // Get all products
  public getCart(){
    return this.httpClient.get(this.url);
  }

  public getCartItem(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // Add Item to Cart
  public addToCart(p:any){
    // this.cart = new Cart({
    //   this.cart.products = products,
    //   this.cart.user = user
    // });
    return this.httpClient.post(this.url,p);
  }

  // Update Cart
  public updateCart(cart:any){
    return this.httpClient.put(`${this.url}/${cart.id}`,cart);
  }

  // Delete Item From Cart
  public deleteFromCart(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}