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
  showAlert:boolean=false;
  prevColor:string = "alert-warning";

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
      this.showAlertChanged();
      document.getElementById("alerting").style.display='block';
      var v =document.getElementById("alerting");
      v.className="";
      v.classList.add("alert", "alert-dismissible", "fade", "show");
  
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
                  v.classList.add("alert-success");
                  document.querySelector("#message").innerHTML = `Transaction is done `;
                

                }
                else{
  
                  v.classList.add("alert-danger");
                  
                  document.querySelector("#message").innerHTML = `transaction is failed due to low balance or daily limit may exceded `;
                  
                  
                }
            });
      }
      else{
        v.classList.add("alert-warning");
        document.querySelector("#message").innerHTML = "Please select all the fields";
        
       
      }
      
      
      

  }

  onAccountIdSelected()
  {
  
  }
  showAlertChanged()
  {
    document.getElementById("alerting").style.display='none';
  }


}
