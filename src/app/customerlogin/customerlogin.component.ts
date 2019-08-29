import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCredentials } from '../CustomerCredentials';
import { CustomerService } from '../customer.service';
import { stringify } from '@angular/core/src/util';
import { AuthService } from '../auth.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  customers: Customer[];

  constructor(
    private router: Router, private customerService: CustomerService, public authService: AuthService) { }
  login1: boolean;
  ngOnInit() {

    if (localStorage.getItem("isLoggedIn") == "true") {
      if (localStorage.getItem("isCustomer") == "true") {
        this.router.navigate(['/']);
      }
      else {
        this.router.navigate(['/']);
      }

    }
    this.customerService.listCustomers().subscribe(customers =>
      this.customers = customers);
  }

  login(data: CustomerCredentials) {
    let customerId = data.customerId;
    let password = data.password;
    console.log(`this is from login funtion`);
    if (!this.verifyCustomerExists(customerId)) {
      document.getElementById("myModal").style.display = "block";
      return;
    }
    this.customerService.validateCustomerLoginCredentials(data).subscribe(response => {
      console.log('Response from login function of customerlogin.component.ts');
      console.log(response);
      if (response === true) {
        console.log("coming into true condition");
        // this.authService.addCustomer(customerId,password);
        console.log("this.authService.logInOrOut is " + this.authService.logInOrOut);
        this.authService.LogTheCustomerOrBanker(data.customerId + "", "true");
        //  this.authService.setLogin(true);
        //  this.authService.timering(1000);
        //  console.log("this.authService.logInOrOut is "+this.authService.logInOrOut);
        //   localStorage.setItem('isLoggedIn', "true");
        //   localStorage.setItem('token', data.customerId+"");
        //   localStorage.setItem('isCustomer',"true");
        this.customerService.login = true;
        this.login1 = true;
        this.router.navigate(['/customer', customerId]);
      }
      else {
        document.getElementById("myModal").style.display = "block";
      }
    });
  }

  functionclose(form) {
    document.getElementById("myModal").style.display = "none";
    form.reset();
  }

  verifyCustomerExists(customerId) {
    let i: number;
    let customerExists = false;
    for (i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId == customerId)
        customerExists = true;
    }
    return customerExists;
  }

}
