import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs-list',
  templateUrl: './chefs-list.component.html',
  styleUrls: ['./chefs-list.component.css']
})
export class ChefsListComponent implements OnInit {
  chefs:any;
  
  constructor() { }

  ngOnInit() {
    this.chefs=[
      {id:1,name:'ali', speciality:'cuisineFR'},
      {id:2,name:'amani',speciality:'cuisineTun'},
      {id:3, name:'nouha', speciality: 'cuisineIt'}
    ]
  }

}
