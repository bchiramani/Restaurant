import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat:any={};
  title:string = 'Add Plat';
  addPlatForm:FormGroup;
  id:any;
  constructor(private formBuilder: FormBuilder,private platService:PlatService,private router:Router,private activatedRoute : ActivatedRoute) { }


  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.platService.sendRequestToGetPlatById(this.id).subscribe(
        (data) => {
          this.plat=data.plat;
        });
      this.title=' Edit Plat';
    }



    this.addPlatForm=this.formBuilder.group({
      name:[''],
      description:[''],
      price:[''],
      note:['']
    })
  }
  addPlat(){
    if (this.id) {
      this.platService.sendRequestToEditPlat(this.plat).subscribe(
        (data)=>{
          console.log(data.message);
        }
      );
      this.router.navigate(['admin']);
    }else{
      if((this.plat.note <11 )&&(this.plat.note>0)){
        console.log(this.plat.note,"amani ");
        this.platService.sendRequestToAddPlat(this.plat).subscribe(
          ()=>{
            console.log('Plat added with success');
          }
        );
        this.router.navigate(['admin']);
      }else{
        console.log(this.plat.note);
        alert('Note should be between 1 and 10')
      }
      
    }

    
  }
  



}
