import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plats-admin',
  templateUrl: './plats-admin.component.html',
  styleUrls: ['./plats-admin.component.css']
})
export class PlatsAdminComponent implements OnInit {
  plats: any;
  plat:any;
  constructor(private platService:PlatService, private router:Router) { 
    
  }

  ngOnInit() {
    this.getAllPlats()
  }
  goToPath(path){
    this.router.navigate([path]);
  }
  getAllPlats(){
    this.platService.sendRequestToGetAllPlats().subscribe(
      (data) => {
        this.plats=data.plats;
    });
  }
  deletePlat( id:any){
    console.log("delete : ", id);
    this.platService.sendRequestToDeletePlat(id).subscribe(
      (data)=>{
        console.log(data.message);
        this.getAllPlats()
      }
    );
  }
  
  goToAdd(){
    this.goToPath('addPlat');
  }
  displayPlat( id){
    this.goToPath(`platInformation/${id}`);
  }
  goToEdit(id){
    this.goToPath(`editPlat/${id}`);
    
  }
 
 

}
