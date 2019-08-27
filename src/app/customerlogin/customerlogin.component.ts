import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCredentials } from '../CustomerCredentials';
import { CustomerService } from '../customer.service';
import { stringify } from '@angular/core/src/util';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(
    private router:Router,private customerService:CustomerService, public authService: AuthService) { }
  login1:boolean;
  ngOnInit() {

    if(localStorage.getItem("isLoggedIn")=="true" )
    {
      if(localStorage.getItem("isCustomer")=="true"){
        this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/']);
      }
      
    }
  }
  
  login(data:CustomerCredentials)
  {
    let customerId = data.customerId;
    let password = data.password;
    console.log(`this is from login funtion`);
    this.customerService.validateCustomerLoginCredentials(data).subscribe(response => {
      console.log('Response from login function of customerlogin.component.ts');
      console.log(response);
      if(response===true){
        console.log("coming into true condition");
       // this.authService.addCustomer(customerId,password);
       console.log("this.authService.logInOrOut is "+this.authService.logInOrOut);
       this.authService.setLogin(true);
       console.log("this.authService.logInOrOut is "+this.authService.logInOrOut);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', data.customerId+"");
        localStorage.setItem('isCustomer',"true");
        this.customerService.login=true;
        this.login1=true;
        this.router.navigate(['/customer',customerId]);
      }
      else
      {
        document.getElementById("myModal").style.display="block"; 
      }
    });
  }

  functionclose() {
      location.reload();
  }
}
