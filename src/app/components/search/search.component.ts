import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  findedPlats:any;
  constructor(private platService:PlatService, private  fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.fb.group({
      name:[''],
      price:['']
    })
  }
  search(){
    console.log("hello there");
    this.platService.sendRequestToGetPlatByNameAndPrice(this.searchForm.value).subscribe(
        (data)=>{
          console.log('here finded plats by name', data);
          this.findedPlats=data.allPlats;
        }
      )
  }

}
