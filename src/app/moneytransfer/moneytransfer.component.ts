import { Component, OnInit } from '@angular/core';
import { MoneytransferService } from '../moneytransfer.service';
import {Account} from '../account';
import { Subscription } from 'rxjs';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {


  allAccounts:Account[];
  customerId:number = 1;
  transaction:any;
  typeOfTransaction:string ="none";
  transactionAmount:number;
  fromAccountId:number;
  toAccountId:number;

  constructor(private moneyTransferService:MoneytransferService) { }

  ngOnInit() {
    this.moneyTransferService.getAllAccounts(this.customerId).subscribe(accounts=>
      this.allAccounts = accounts
      );
    
  }

  doTransaction()
  {
      console.log(this.fromAccountId);
      // this.transaction.fromAccountId = this.fromAccountId;
      // this.transaction.toAccountId = this.toAccountId;
      // this.transaction.transactionAmount = this.transactionAmount;
      // this.transaction.typeOfTransaction = this.typeOfTransaction;
      console.log("came inside doTransaction");
      if(this.transactionAmount!=null && this.typeOfTransaction!="null" && this.toAccountId!=null && this.fromAccountId!=null)
      {
            this.transaction = {
              fromAccountId : this.fromAccountId,
              toAccountId : this.toAccountId,
              transactionAmount : this.transactionAmount,
              typeOfTransaction : this.typeOfTransaction
            };
      
            this.moneyTransferService.addTransaction(this.transaction).subscribe(function(response){
                if(response === true)
                {
                  alert("transaction is done");
                }
                else{
                  alert("transaction is failed due to low balance");
                }
            });
      }
      else{
        alert("Please select the fields");
      }
      
      

  }


}
