import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  chef:any={};
  title:string = 'Add Chef';
  addChefForm:FormGroup;
  id:any;
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private chefService:ChefService, private router : Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.chefService.sendRequestToGetChefById(this.id).subscribe(
        (data) => {
          this.chef=data.chef;
        });
      this.title=' Edit Chef';
    }



    this.addChefForm=this.formBuilder.group({
      name:[''],
      speciality:[''],
      experience:['']
    })
  

   
  }
  addChef() {
    if (this.id) {
      this.chefService.sendRequestToEditChef(this.chef).subscribe(
        (data)=>{
          console.log(data.message);
        }
      );
      this.router.navigate(['admin']);
    }else{
      this.chefService.sendRequestToAddChef(this.chef).subscribe(
        (data)=>{
          console.log(data.message);
        }
      );
      this.router.navigate(['admin']);
    }
  }

}
