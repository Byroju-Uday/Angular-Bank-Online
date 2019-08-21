import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {

  private subscription:Subscription;
  transactions:Transaction[];
  fromDate : Date;
  toDate : Date;
  accountId:number;
  constructor(private transactionService:TransactionService) { }

  ngOnInit() {
    this.accountId =4;
    this.transactionService.fetchTransactions(this.accountId).subscribe(transactions =>
      this.transactions = transactions);
  }


  filterTransactions(){
    console.log("Came into filterTransactions method");
  }


  

  

}
