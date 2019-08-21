import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent {

  constructor(private customerService:CustomerService,private router :Router) { }

  handleDelete(data: number){
    let customerId: number = data;
    this.customerService.deleteCustomer(customerId).subscribe(response => {
      console.log('Response');
      console.log(response);
      this.router.navigate(['/']);
      })
   }

}
