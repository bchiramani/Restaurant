import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats = [];
  constructor( private platService: PlatService) { }

  ngOnInit() {
    this.platService.sendRequestToGetAllPlats().subscribe( 
      (data)=>{
        this.plats=data.plats;
      }
    )
  }

}
