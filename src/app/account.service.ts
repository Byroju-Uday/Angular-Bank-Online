import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './Account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private USER_API_URL = "http://localhost:8080/api/v1/accounts";

  constructor(private httpClient:HttpClient) { }


  saveAccount(account:Account):Observable<any>{
    console.log("Inside the saveAccount")
    return this.httpClient.post(this.USER_API_URL, account);
  }
  
}
