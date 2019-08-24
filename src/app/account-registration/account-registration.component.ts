import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import {ValidationErrors,ValidatorFn, AbstractControl, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})

export class AccountRegistrationComponent {

  constructor(private accountService:AccountService,private router :Router) { }
  accountBalance:number;
  handleFormData(data:Account,divName){
    console.log(data);
    let account:Account = new Account();
    console.log("Inside Handle form")
    account.accountBalance=data.accountBalance;
    account.accountType=data.accountType;
    account.customerId=data.customerId;
    this.accountService.saveAccount(account).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    })
   }
   minBalanceCheck(accountBalance,divName){
     console.log("Inside minBalance method");
     this.accountBalance=accountBalance;
     if (accountBalance<5000){
       document.getElementById(divName).innerText="Minimum Balance should be 5000";
       return;
     }
     else {
       document.getElementById(divName).innerText="";
     }
   }

   balanceInValid():boolean{
     if(this.accountBalance<5000)
     return true;
     else
     false;
   }

}
