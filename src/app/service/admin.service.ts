import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3000/admins";

  // Get all admins
  public getAdmins(){
    return this.httpClient.get(this.url);
  }

  // Get one admin
  public getAdmin(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

    // Get one admin
    public getAdminByAdminUN(adminUN:string){
       return this.httpClient.get(`${this.url}?adminUN=${adminUN}`);
      }

  // Add admin
  public addAdmin(admin:any){
    return this.httpClient.post(this.url,admin);
  }

  // Update admin
  public updateAdmin(admin:any){
    return this.httpClient.put(`${this.url}/${admin.id}`,admin);
  }

  // Delete admin
  public deleteAdmin(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
