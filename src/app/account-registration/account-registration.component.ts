import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import {ValidationErrors,ValidatorFn, AbstractControl, FormGroup, FormControl, Validators} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.css']
})

export class AccountRegistrationComponent implements OnInit{
  
  customers:Customer[];
  constructor(private accountService:AccountService,private router :Router,private customerService:CustomerService) { }
  accountBalance:number;
  customerExists=0;

  ngOnInit(){
    this.customerService.listCustomers().subscribe(customers=>
      this.customers=customers);
  }

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
   
   customerExistCheck(customerId,divName){
    let i:number;    
    this.customerExists=0;
    if(customerId!=null){
    console.log("----Customer Object----")
    console.log(this.customers.length);
    for(i=0;i<this.customers.length;i++){
       if(this.customers[i].customerId==customerId)
       this.customerExists=1;
    }
      if(this.customerExists==0){
      document.getElementById(divName).innerText="Customer Does not exist"; return;
    }
      else
      document.getElementById(divName).innerText="";
   }
  }
   customerNotExists():boolean{
    console.log("Inside customerCheck method");  
     if(this.customerExists==0)
     return true;
     else
     false;
   }
}
