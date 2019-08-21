import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-sidebarbanker',
  templateUrl: './sidebarbanker.component.html',
  styleUrls: ['./sidebarbanker.component.css']
})
export class SidebarbankerComponent implements OnInit {

  constructor() { }
  customer:Customer;

  ngOnInit() {
  }

}
