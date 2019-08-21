import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { CustomerCredentials } from './CustomerCredentials';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private USER_API_URL = "http://localhost:8080/employee/";
  private CUSTOMER_API_URL = "http://localhost:8080/customer/";
  private TRANSACTION_API_URL = "http://localhost:8080/api/v1/transaction/"

  constructor(private httpClient:HttpClient) { }


  fetchTransactions(accountId:number):Observable<Transaction[]>{
    
    return this.httpClient.get<Transaction[]>(this.TRANSACTION_API_URL+accountId);

  }
}
