import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { CustomerCredentials } from './CustomerCredentials';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private USER_API_URL_SAVE = "http://localhost:8080/employee/";
  private CUSTOMER_API_URL = "http://localhost:8080/customer/";
  private USER_API_URL = "http://localhost:8080/customer/profile";
  private USER_API_DELETE_URL = "http://localhost:8080/employee/delete";
  private USER_API_URL_UPDATE = "http://localhost:8080/employee/profile";
  private CUSTOMER_ACCOUNT_API_URL = "http://localhost:8080/customer/accounts";

  customers:any[]=[];

  constructor(private httpClient:HttpClient) { }


  saveCustomer(customer:Customer):Observable<any>{
    console.log("Inside the saveCustomer")
    return this.httpClient.post(this.USER_API_URL_SAVE, customer);
  }

  validateCustomerLoginCredentials(customerCredentials:CustomerCredentials):Observable<any>{
    console.log("inside the validateLoginCredentials method of customer.service.ts");
    console.log(JSON.stringify(customerCredentials));
    return this.httpClient.post(this.CUSTOMER_API_URL+"customerLoginValidation",customerCredentials);
  }
  
  getCustomerDetails(customerId:number):Observable<Customer>{
    console.log("Inside the Get Customer");
    console.log(customerId);
    return this.httpClient.get<Customer>(this.USER_API_URL+"/"+customerId);
  }

  getAccountDetails(customerId:number):Observable<Account[]>{
    return this.httpClient.get<Account[]>(this.CUSTOMER_ACCOUNT_API_URL+"/"+customerId);
  }

  listCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.CUSTOMER_API_URL+"/customers");
   }

  deleteCustomer(customerId: number):Observable<number>{
    console.log("Inside the delete Customer");
    console.log(customerId)
    return this.httpClient.get<number>(this.USER_API_DELETE_URL+"/"+customerId);
  }

   updateCustomer(customerId: number, customer:Customer):Observable<Customer>{
     console.log("inside the updatecustomer");
     console.log(this.USER_API_URL_UPDATE);
     console.log(customerId);
      return this.httpClient.put<Customer>(this.USER_API_URL_UPDATE+"/"+customerId, customer);
  }
  
}
