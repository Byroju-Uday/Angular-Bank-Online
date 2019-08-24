import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  public route: string;
  customerId: number;
  customer : Customer;
  constructor(router: Router, private customerService: CustomerService) {
    this.route = router.url.split("/")[2];
    this.customerId = Number(this.route);
  }
  ngOnInit() {
    this.customerService
    .getCustomerDetails(this.customerId)
    .subscribe(response => {
      this.customer = response;
      console.log(this.customer);
    });
    this.customerService
    .getAccountDetails(this.customerId)
    .subscribe(response => {
      this.customer.accounts = response;
      console.log(this.customer.accounts);
    });
  }

}
