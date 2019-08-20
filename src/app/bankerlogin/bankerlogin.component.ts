import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bankerlogin',
  templateUrl: './bankerlogin.component.html',
  styleUrls: ['./bankerlogin.component.css']
})
export class BankerloginComponent implements OnInit {
//router injection
  constructor(
    private router:Router
    ) { }

  ngOnInit() {
  }
  login()
  {
    this.router.navigate(['banker']);
  }

}
