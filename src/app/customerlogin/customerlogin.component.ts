import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(
    private router:Router
    ) { }

  ngOnInit() {
  }
  login()
  {
    this.router.navigate(['customer']);
  }

}
