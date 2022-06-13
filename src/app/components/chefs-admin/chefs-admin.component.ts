import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs-admin',
  templateUrl: './chefs-admin.component.html',
  styleUrls: ['./chefs-admin.component.css']
})
export class ChefsAdminComponent implements OnInit {
  chefs:any;
  constructor(private chefService : ChefService,private router:Router) { }
  
  ngOnInit() {
    this.getAllChefs();
  }
  getAllChefs(){
    this.chefService.sendRequestToGetAllChefs().subscribe(
      (data) => {
        this.chefs = data.chefs
      }
    )
  }

  deleteChef(id : number){
    this.chefService.sendRequestToDeleteChef(id).subscribe(
      ()=>{
        console.log("request to delete chef");
        this.getAllChefs();
      }
    );
  }
  addChef(){
    this.router.navigate(['addChef']);
   
  }
  displayChef(id){
    this.router.navigate([`chefInformation/${id}`]);
  }
  editChef(id){
    this.router.navigate([`addChef/${id}`]);
  }

}
