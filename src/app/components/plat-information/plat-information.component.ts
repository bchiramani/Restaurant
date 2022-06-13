import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-information',
  templateUrl: './plat-information.component.html',
  styleUrls: ['./plat-information.component.css']
})
export class PlatInformationComponent implements OnInit {
  id:any;
  plat:any;
  constructor(private activatedRoute: ActivatedRoute, private platService: PlatService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    
    this.platService.sendRequestToGetPlatById(this.id).subscribe(
      (data)=>{
        console.log("Data from backend: " , data);
        this.plat=data.plat;
      }
    );
  }

}
