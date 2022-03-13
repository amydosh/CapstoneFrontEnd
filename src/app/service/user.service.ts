import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/users";

  // Get all products
  public getUsers(){
    return this.httpClient.get(this.url);
  }

  // Get one product
  public getUser(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

    // Get one product
    public getUserByEmail(email:string){
       return this.httpClient.get(`${this.url}?email=${email}`);
      }

  // Add product
  public addUser(user:any){
    return this.httpClient.post(this.url,user);
  }

  // Update product
  public updateUser(user:any){
    return this.httpClient.put(`${this.url}/${user.id}`,user);
  }

  // Delete product
  public deleteUser(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
