import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { Customer } from '../Customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-modify',
  templateUrl: './customer-modify.component.html',
  styleUrls: ['./customer-modify.component.css']
})
export class CustomerModifyComponent implements OnInit {

  currentCustomer:Customer;
  customerId:number;
  customers:Customer[];


  private currentUserSubscription:Subscription;
  constructor(route:ActivatedRoute,private customerSevice:CustomerService) {

    this.customerId = route.snapshot.params.id;
    console.log(this.customerId);
   }

  ngOnInit() {
      this.customerSevice
        .listCustomers()
        .subscribe(response =>{
          this.customers=response;
        });
  }

  findById(id:number):Customer{
    this.currentUserSubscription = this.customerSevice
    .getCustomerDetails(this.customerId)
    .subscribe(response => {
      this.currentCustomer = response;
      console.log(response);
    });
    return this.currentCustomer;
}
}
