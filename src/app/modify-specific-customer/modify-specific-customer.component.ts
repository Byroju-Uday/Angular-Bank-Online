import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-modify-specific-customer',
  templateUrl: './modify-specific-customer.component.html',
  styleUrls: ['./modify-specific-customer.component.css']
})
export class ModifySpecificCustomerComponent implements OnInit {
  
  currentCustomer:Customer;
  customerId:number;

  constructor(route:ActivatedRoute,private customerService:CustomerService,private router :Router) {
    this.customerId = route.snapshot.params.customerId;
    console.log(this.customerId)
   }

  ngOnInit() {
    
    this.customerService
    .getCustomerDetails(this.customerId)
    .subscribe(response => {
      this.currentCustomer = response;
      console.log(response);
    });
    //console.log(this.currentCustomer);
  }
  handleModify(form){
    console.log(form);
    let data = form.value;
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
    this.customerService.updateCustomer(this.customerId ,customer).subscribe(response => {
      console.log('Response');
      console.log(response);
      document.getElementById("alert").style.display="block";
      setTimeout(() => {
        this.router.navigate(['/banker/modifyCustomer']);
      }, 1500); 
    })
   }
}
