import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { CustomerCredentials } from './CustomerCredentials';
import {Account} from './account';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class MoneytransferService {

  
  private GET_ALL_ACCOUNTS = "http://localhost:8080/customer/accounts";
  private TRANSACTION = "http://localhost:8080/api/v1";

  constructor(private httpClient:HttpClient) { }

  getAllAccounts(customerId:number):Observable<any[]>{
    console.log("Inside the Get getAllAccounts method of moneytransfer.service.ts");
    console.log(customerId);
    return this.httpClient.get<any[]>(this.GET_ALL_ACCOUNTS+"/"+customerId);
  }

  addTransaction(transaction:Transaction):Observable<Boolean>{
    console.log("came into addTransaction method of moneytransfer.service.ts");

    return this.httpClient.post<any>(this.TRANSACTION+"/"+"saveTransaction",transaction);
  }
}
