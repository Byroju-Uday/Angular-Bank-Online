import { Component, OnInit,OnDestroy } from '@angular/core';
import { AccountService } from '../account.service';
import { BankerService } from '../banker.service';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  
  logInOrOut:boolean;
  subscription:Subscription;
  constructor(private router:Router,private bankerService:BankerService,private customerService:CustomerService,public authService:AuthService) { }
  
  ngOnInit() {

    this.subscription = this.authService.getLogInOrOut().subscribe((logInOut) => {
      console.log("this authservice is called");
      this.logInOrOut = logInOut;
    });

  }
  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }
  logout(){

    this.authService.logout();
    if(localStorage.getItem("isCustomer")=="true"){
      this.router.navigate(['/customerLogin']);
    }
    else{
      this.router.navigate(['/bankerLogin']);
    }
       
  }
  
}
