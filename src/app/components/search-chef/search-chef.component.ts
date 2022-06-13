import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-search-chef',
  templateUrl: './search-chef.component.html',
  styleUrls: ['./search-chef.component.css']
})
export class SearchChefComponent implements OnInit {

  searchForm:FormGroup;
  findedChefs:any;
  constructor(private chefService:ChefService, private  fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm=this.fb.group({
      speciality:['']
    })
  }
  search(){
    console.log("the speciality is", this.searchForm.value);
    this.chefService.sendRequestToGetChefBySpeciality(this.searchForm.value).subscribe(
        (data)=>{
          console.log('here finded chefs by speciality', data.allChefs);
          this.findedChefs=data.allChefs;
        }
      )
  }


}
