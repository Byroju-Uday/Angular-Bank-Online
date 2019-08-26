import { Component, OnInit } from '@angular/core';
import { BankerService } from '../banker.service';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(
    private bankerService: BankerService, private customerService: CustomerService,
    private router: Router) {

  }

  ngOnInit() {
    this.bankerService.login=false;
    this.customerService.login=false;
    this.router.navigate(['']);
  }


}
