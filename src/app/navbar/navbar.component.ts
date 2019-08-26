import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { BankerService } from '../banker.service';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private bankerService:BankerService,private customerService:CustomerService) { }
  
  ngOnInit() {
  }
  
}
