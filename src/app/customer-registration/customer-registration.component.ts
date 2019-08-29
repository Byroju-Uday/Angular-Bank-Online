import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})

export class CustomerRegistrationComponent {

  customers: Customer[];
  customer: Customer = new Customer();
  invalid: boolean = true;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerService.listCustomers().subscribe(customers =>
      this.customers = customers);
  }

  handleFormData(form) {
    let data = form.value;
    console.log(data);
    this.customer.customerId = data.customerId;
    this.customer.customerName = data.customerName;
    this.customer.address = data.address;
    this.customer.aadharNo = data.aadharNo;
    this.customer.dob = data.dob;
    this.customer.emailId = data.emailId;
    this.customer.pancardNo = data.pancardNo;
    this.customer.password = data.password;
    this.customer.phoneNo = data.phoneNo;
    this.customerService.saveCustomer(this.customer).subscribe(response => {
      console.log('Response');
      //console.log(this.router.navigate(['/banker/addCustomer']));
      console.log(response);
      document.getElementById("alert").style.display = "block";
      //this.router.navigateByUrl('http://localhost:4200/banker');
    })
    form.reset();
  }

  verifyPasswordConfirmPassword(password, confirmpassword, divName) {
    if (password == confirmpassword) {
      document.getElementById(divName).innerText = "";
      this.invalid = false;
    }
    else {
      document.getElementById(divName).innerText = "Passwords do not match!"
      this.invalid = true;
    }
  }

  verifyCustomerId(customerId, divName) {
    let i: number;
    let customerExists = 0;
    for (i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId == customerId)
        customerExists = 1;
    }
    if (customerExists == 1) {
      document.getElementById(divName).innerText = "Customer Already Exists";
      this.invalid = true;
    }
    else {
      document.getElementById(divName).innerText = "";
      this.invalid = false;
    }
  }

  verifyEmailId(email, divName) {
    console.log("inside email verification");
    let i: number;
    let emailExists = 0;

    for (i = 0; i < this.customers.length; i++) {
      if (this.customers[i].emailId == email)
        emailExists = 1;
    }
    if (emailExists == 1) {
      document.getElementById(divName).innerText = "Email Already Exists";
      this.invalid = true;
    }
    else {
      document.getElementById(divName).innerText = "";
      this.invalid = false;
    }
  }

  failedCustomVerification() {
    return this.invalid;
  }
}
