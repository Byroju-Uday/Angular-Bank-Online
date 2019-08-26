import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CustomerService } from '../customer.service';
import { CustomerCredentials } from '../CustomerCredentials';
import { BankerService } from '../banker.service';
@Component({
  selector: 'app-bankerlogin',
  templateUrl: './bankerlogin.component.html',
  styleUrls: ['./bankerlogin.component.css']
})
export class BankerloginComponent implements OnInit {
//router injection
  constructor(
    private router:Router,private bankerService:BankerService
    ) { }

    
    ngOnInit() {
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
      this.router.navigate(['/banker']);     
    }
    else{
      this.router.navigate(['/bankerLogin']);
    }
  }

}
