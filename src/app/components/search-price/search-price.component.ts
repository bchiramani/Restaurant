import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-search-price',
  templateUrl: './search-price.component.html',
  styleUrls: ['./search-price.component.css']
})
export class SearchPriceComponent implements OnInit {
  searchForm:FormGroup;
  findedPlats:any;
  constructor(private platService:PlatService, private  fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.fb.group({
      price:['']
    })
  }
  search(){
    this.platService.sendRequestToGetPlatPriceBiggerThan(this.searchForm.value).subscribe(
        (data)=>{
          console.log('here finded plats where price is bigger than', this.searchForm.value);
          this.findedPlats=data.allPlats;
        }
      )
  }
}
