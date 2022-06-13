import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
  dishes: any;
  popularMenuBanner={subTitle:"Popular Menu",title:"Delicious food"};
  constructor(private platService:PlatService) { }

  ngOnInit() {
    this.platService.sendRequestToGetAllPlats().subscribe(
      (data) => {
        this.dishes = data
      })

    
  }

}
