import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit{
  
  customers:Customer[];
  customerExists:number;
  inValidCustomerID:boolean;

  constructor(private customerService:CustomerService,private router :Router) { }
  
    ngOnInit() {
      this.customerService.listCustomers().subscribe(customers =>
        this.customers = customers);
    }

  handleDelete(data: number){
    let customerId: number = data;
    this.customerService.deleteCustomer(customerId).subscribe(response => {
      console.log('Response');
      console.log(response);
      document.getElementById("alert").style.display="block";
      setTimeout(() => {
         this.router.navigate(['/banker']);
      }, 5000);  
      })
   }
  
   verifyCustomerExists(customerId,divName){
    let i: number;
    this.customerExists=0;
    if(customerId==null){
      document.getElementById(divName).innerText="";
    }
    if(customerId!=null){
    for (i = 0; i < this.customers.length; i++) {
      if (customerId == this.customers[i].customerId) {
        this.customerExists = 1; break;
      }
    }
    if (this.customerExists == 0) {
      document.getElementById(divName).innerText = "Customer does not exist";
      this.inValidCustomerID = true;
    }
    else {
      document.getElementById(divName).innerText = "";
      this.inValidCustomerID = false;
    }
  }
   }

   failedCustomerValidation(){
     return this.inValidCustomerID;
   }
  
}
