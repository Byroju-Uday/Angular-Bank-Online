import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { CustomerCredentials } from './CustomerCredentials';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private USER_API_URL = "http://localhost:8080/employee/";
  private CUSTOMER_API_URL = "http://localhost:8080/customer/"

  customers:any[]=[];

  constructor(private httpClient:HttpClient) { }


  saveCustomer(customer:Customer):Observable<any>{
    console.log("Inside the saveCustomer")
    return this.httpClient.post(this.USER_API_URL, customer);
  }

  validateCustomerLoginCredentials(customerCredentials:CustomerCredentials):Observable<any>{
    console.log("inside the validateLoginCredentials method of customer.service.ts");
    console.log(JSON.stringify(customerCredentials));
    return this.httpClient.post(this.CUSTOMER_API_URL+"customerLoginValidation",customerCredentials);
  }
}
