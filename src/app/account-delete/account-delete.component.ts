import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../Account';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent implements OnInit {

  accounts: Account[];
  inValidAccount = true;
  accountExists: number;

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts =>
      this.accounts = accounts);
  }

  handleDelete(form) {
    let accountNumber = form.value.accountNumber;
    this.accountService.deleteAccount(accountNumber).subscribe(response => {
      console.log('Response');
      console.log(response);
      document.getElementById("alert").style.display = "block";
    })
    form.reset();
  }

  verifyAccountExists(accountNumber, divName) {
    let i: number;
    this.accountExists = 0;
    if (accountNumber == null) {
      document.getElementById(divName).innerText = "";
    }
    if (accountNumber != null) {
      for (i = 0; i < this.accounts.length; i++) {
        if (accountNumber == this.accounts[i].accountNumber) {
          this.accountExists = 1; break;
        }
      }
      if (this.accountExists == 0) {
        document.getElementById(divName).innerText = "Account Does not exist";
        this.inValidAccount = true;
      }
      else {
        document.getElementById(divName).innerText = "";
        this.inValidAccount = false;
      }
    }
  }
  failedAccountVerification() {
    return this.inValidAccount;
  }

}
