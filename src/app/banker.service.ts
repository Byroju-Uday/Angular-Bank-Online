import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { CustomerCredentials } from './CustomerCredentials';

@Injectable({
  providedIn: 'root'
})
export class BankerService {

  private USER_API_URL = "http://localhost:8080/employee/";
  private CUSTOMER_API_URL = "http://localhost:8080/customer/"

  customers:any[]=[];

  constructor(private httpClient:HttpClient) { }

  validateBankerLoginCredentials(bankerCredentials:{bankerId:number,password:string}):Boolean{
    console.log("inside the validateBankerCredentials method of customer.service.ts");
    console.log(JSON.stringify(bankerCredentials));
    if(bankerCredentials.bankerId===2 && bankerCredentials.password==="vijay")
    {
      return true;
    }
    return false;

   // return this.httpClient.post(this.CUSTOMER_API_URL+"customerLoginValidation",bankerCredentials);
  }
}
