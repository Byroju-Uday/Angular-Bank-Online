import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './Account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private ACCOUNT_API_URL = "http://localhost:8080/api/v1/accounts";
  private ACCOUNT_API_DELETE_URL = "http://localhost:8080/api/v1/accounts/delete";

  constructor(private httpClient:HttpClient) { }


  saveAccount(account:Account):Observable<any>{
    console.log("Inside the saveAccount")
    return this.httpClient.post(this.ACCOUNT_API_URL, account);
  }

  deleteAccount(accountId: number):Observable<number>{
    console.log("Inside the delete Customer");
    console.log(accountId)
    return this.httpClient.get<number>(this.ACCOUNT_API_DELETE_URL+"/"+accountId);
  }
  
}
