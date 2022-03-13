import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/purchases";

  // Complete Transaction and Store the TX Info
  public checkout(purchase:any){
    return this.httpClient.post(this.url,purchase);
  }

  // Get all purchases
  public getPurchases(){
    return this.httpClient.get(this.url);
  }


}
