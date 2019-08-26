import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { Subscription } from 'rxjs';
import { TransactionService } from '../transaction.service';
import { MoneytransferComponent } from '../moneytransfer/moneytransfer.component';
import { MoneytransferService } from '../moneytransfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {

  private subscription:Subscription;
  public route: string;
  allAccounts:Account[];
  transactions:Transaction[];
  fromDate : Date = null;
  toDate : Date=null;
  accountId:number;
  customerId:number=1;
  pageCount:number = 5;
  constructor(router: Router, private transactionService:TransactionService,private moneyTransferService:MoneytransferService) {
    this.route = router.url.split("/")[2];
    this.customerId = Number(this.route);
   }

  temporary_Transactions:Transaction[];

  ngOnInit() {

        this.moneyTransferService.getAllAccounts(this.customerId).subscribe(accounts=>
          this.allAccounts = accounts
          );
    
  }


  filterTransactions(){
    //console.log("Came into filterTransactions method");
    // var dateFrom = "02/05/2013";
    // var dateTo = "02/09/2013";
   // console.log(this.fromDate.toString());
   
   if(this.fromDate!=null && this.toDate!=null)
   {
        var d1 = this.fromDate.toString().split("-");
        var d2 = this.toDate.toString().split("-");
        console.log(d1);
        var from = new Date(parseInt(d1[0]), parseInt(d1[1])-1, parseInt(d1[2]));  // -1 because months are from 0 to 11
        var to   = new Date(parseInt(d2[0]), parseInt(d2[1])-1, parseInt(d2[2]));
        console.log(from);
        console.log(to);
        
        this.temporary_Transactions = this.transactions.filter(function(transaction) {
          //console.log(transaction.date.toString());
          let date = transaction.date.toString();
          let date_correct = date.split("-");
          var transactionDate= new Date(parseInt(date_correct[0]), parseInt(date_correct[1])-1, parseInt(date_correct[2]));
          console.log("this is from transactions filter"+transactionDate);
          console.log(transactionDate>=from);
          return (transactionDate>= from  && transactionDate<=to)
        });
   }
   else{
        alert("Please select the fields");
   }
    

    
  }
  onAccountIdSelected()
  {
    this.fromDate = null;
    this.toDate = null;
    this.transactionService.fetchTransactions(this.accountId).subscribe(transactions =>
      this.temporary_Transactions = transactions
      );
      this.transactionService.fetchTransactions(this.accountId).subscribe(transactions =>
        this.transactions = transactions
        );
  }
  filterReset(){
    this.temporary_Transactions = this.transactions;
    this.fromDate = null;
    this.toDate = null;
  }



  

  

}
