import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerCredentials } from '../CustomerCredentials';
import { BankerService } from '../banker.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-bankerlogin',
  templateUrl: './bankerlogin.component.html',
  styleUrls: ['./bankerlogin.component.css']
})
export class BankerloginComponent implements OnInit {
//router injection
  constructor(
    private router:Router,private bankerService:BankerService,public authService:AuthService
    ) { }

    
    ngOnInit() {

      if(localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn")=="true" )
      {
        if(localStorage.getItem("isCustomer")=="true"){
          this.router.navigate(['/customer']);
        }
        else{
          this.router.navigate(['/banker']);
        }
        
      }
  }

  login(data:{bankerId:string,password:string})
  {
    let bankerId = data.bankerId;
    let password = data.password;
    console.log(`this is from login funtion`);
    // this.bankerService.validateBankerLoginCredentials(data).subscribe(response => {
    //   console.log('Response from login function of customerlogin.component.ts');
    //   console.log(response);
    //   if(response===true)
    //     this.router.navigate(['/banker']);
    //   else
    //     this.router.navigate(['/bankerLogin']);
    // });
    let ans = this.bankerService.validateBankerLoginCredentials(data)
    if(ans) {
      console.log("the login details are correct ....navigating to /banker")
      this.bankerService.login=true;
      this.authService.LogTheCustomerOrBanker("admin","false");
      // this.authService.setLogin(true);
      //  console.log("this.authService.logInOrOut is "+this.authService.logInOrOut);
      //   localStorage.setItem('isLoggedIn', "true");
      //   localStorage.setItem('token', data.bankerId+"");
      //   localStorage.setItem('isCustomer',"false");
      this.router.navigate(['/banker']);     
    }
    else{
      document.getElementById("myModal").style.display="block"; 
    }
  }

  functionclose(form) {
    document.getElementById("myModal").style.display="none";  
    form.reset();
    }

}
