import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminBanner={title: 'Dashboard',subTitle: "Admin"}
  constructor() { }

  ngOnInit() {
  }

}
