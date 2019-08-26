import { Component, OnInit } from '@angular/core';
import { MoneytransferService } from '../moneytransfer.service';
import {Account} from '../account';
import { Router } from '@angular/router';


@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {

  public route: string;
  allAccounts:Account[];
  customerId:number;
  transaction:any;
  typeOfTransaction:string ="none";
  transactionAmount:number;
  fromAccountId:number;
  toAccountId:number;
  showAlert:boolean=true;

  constructor(router: Router, private moneyTransferService:MoneytransferService) {
    this.route = router.url.split("/")[2];
    this.customerId = Number(this.route);
    console.log("the constructor is called first");
  }

  ngOnInit() {
    console.log("the ngOnInit is called second");
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
      this.showAlertChanged();
  
      if(this.transactionAmount!=null && this.typeOfTransaction!="none" && this.toAccountId!=null && this.fromAccountId!=null && this.fromAccountId!=this.toAccountId)
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
                  
                  document.getElementById("message").innerHTML = `Transaction is done `;
                  //alert("transaction is done");

                }
                else{
                  document.getElementById("message").innerHTML = `transaction is failed due to low balance or daily limit may exceded `;
                  //alert("transaction is failed due to low balance or daily limit may exceded");
                }
            });
      }
      else{
        document.getElementById("message").innerHTML = "Please select all the fields";
       // alert("Please select all the fields");
      }
      
      
      

  }

  onAccountIdSelected()
  {
    //console.log("came into onAccountIdSelected()");
    

    // let current_selected_account=this.allAccounts.find(account=>
    //     account.accountNumber = this.fromAccountId
    //   )
     // console.log(current_selected_account.lastTransactionDate);
      //  var datenow:Date = new Date();
      //  var date_now_arr = datenow.toString().split(" ");
      //  var datecur:Date = new Date(2019,7,26);
      //  var date_cur_arr = datecur.toString().split(" ");

      //  if(date_now_arr[0] == date_cur_arr[0] && date_now_arr[0] == date_cur_arr[0] && date_now_arr[0] == date_cur_arr[0] && date_now_arr[0] == date_cur_arr[0] )
      //  {
      //   document.getElementById("message").innerHTML = `you transaction left amount for today is   ${10000-current_selected_account.dateTransactionsCount} `;
      //  }
      //  else{
      //    document.getElementById("message").innerHTML = `you transaction left amount for today is $10000`;
      //  }
      //  console.log(datenow +" ------- "+ datecur);
      // var transactionDate= new Date(parseInt(date_correct[0]), parseInt(date_correct[1])-1, parseInt(date_correct[2]));

    


  }
  showAlertChanged()
  {
      this.showAlert = !this.showAlert;
  }


}
