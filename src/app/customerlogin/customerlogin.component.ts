import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCredentials } from '../CustomerCredentials';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(
    private router:Router,private customerService:CustomerService) { }

  ngOnInit() {
  }
  login(data:CustomerCredentials)
  {
    let customerId = data.customerId;
    let password = data.password;
    console.log(`this is from login funtion`);
    this.customerService.validateCustomerLoginCredentials(data).subscribe(response => {
      console.log('Response from login function of customerlogin.component.ts');
      console.log(response);
      if(response===true)
        this.router.navigate(['/customer',customerId]);
      else
        this.router.navigate(['/customerLogin']);
    });
  }

}
