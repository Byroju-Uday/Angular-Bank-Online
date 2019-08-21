import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})

export class AccountRegistrationComponent  {

  constructor(private accountService:AccountService,private router :Router) { }

  handleFormData(data:Account){
    console.log(data);
    let account:Account = new Account();
    account.accountId=data.accountId;
    account.accountBalance=data.accountBalance;
    account.accountNumber=data.accountNumber;
    account.accountType=data.accountType;
    account.customerId=data.customerId;
    this.accountService.saveAccount(account).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    })
   }


}
