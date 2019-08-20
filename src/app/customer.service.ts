import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private USER_API_URL = "http://localhost:8080/employee/"

  customers:any[]=[];

  constructor(private httpClient:HttpClient) { }


  saveCustomer(customer:Customer):Observable<any>{
    console.log("Inside the saveCustomer")
    return this.httpClient.post(this.USER_API_URL, customer);
  }
}
