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

  constructor(private customerService:CustomerService,private router :Router) { }

  handleFormData(data:Customer){
    console.log(data);
    let customer:Customer = new Customer();
    customer.customerId = data.customerId;
    customer.customerName = data.customerName;
    customer.address = data.address;
    customer.aadharNo = data.aadharNo;
    customer.dob = data.dob;
    customer.emailId = data.emailId;
    customer.pancardNo = data.pancardNo;
    customer.password = data.password;
    customer.phoneNo = data.phoneNo;
    this.customerService.saveCustomer(customer).subscribe(response => {
      console.log('Response');
      //console.log(this.router.navigate(['/banker/addCustomer']));
      console.log(response);
      location.reload();
      //this.router.navigateByUrl('http://localhost:4200/banker');
    })
   }

}
