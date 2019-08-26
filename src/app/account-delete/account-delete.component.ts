import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-delete',
  templateUrl: './account-delete.component.html',
  styleUrls: ['./account-delete.component.css']
})
export class AccountDeleteComponent{

  constructor(private accountService:AccountService, private router:Router) { }

  handleDelete(data: number){
    let accountId: number = data;
    this.accountService.deleteAccount(accountId).subscribe(response => {
      console.log('Response');
      console.log(response);
      document.getElementById("alert").style.display="block";
      setTimeout(() => {
        this.router.navigate(['/banker']);
      }, 5000);      
      })
   }
}
