import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input
@Component({
  selector: 'app-plat-child',
  templateUrl: './plat-child.component.html',
  styleUrls: ['./plat-child.component.css']
})
export class PlatChildComponent implements OnInit {
  @Input() platInput: any;
  constructor() { }

  ngOnInit() {
    console.log(this.platInput);
  }
  priceColor(x){
    let color;
    if(x>30){
      color='red';
    }else if(x>10){
      color='orange';
    }else{
      color='green';
    }
    return color
      
  }
  noteStyle(x){
    let result;
    if(x>=8){
      result='2';
    }else if(x>=5 && x<8){
      result='1';
    }else{
      result='0';
    }
    return result
  }


}
