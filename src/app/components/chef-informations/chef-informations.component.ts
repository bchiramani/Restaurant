import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chef-informations',
  templateUrl: './chef-informations.component.html',
  styleUrls: ['./chef-informations.component.css']
})
export class ChefInformationsComponent implements OnInit {
  chef:any;
  id: any;
  constructor(private chefService: ChefService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.chefService.sendRequestToGetChefById(this.id).subscribe(
      (data)=>{
        this.chef=data.chef;
      }
    )
  }

}
