import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { mustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  variable1='   abderrahmen  ertyu fghj         rftgyhjk';
  href :string;
  errMessage: string;
  constructor(private fb: FormBuilder, private userService: UserService, private router:Router) {

   }

  ngOnInit() {
do    this.href=this.router.url;
    console.log("Here href ", this.href);
    this.signupForm= this.fb.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      
      lastName : ['',[Validators.required,Validators.minLength(3)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(5)]],
      confirmPassword : ['',[Validators.required,Validators.minLength(5)]],
      tel : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(13)]]
    },
    {
      validator: mustMatch('password', 'confirmPassword')
    })
    
  }
  signup(){
    let roleAttribute;
    if(this.href ==="/signup"){
      roleAttribute ="user";
    }else{
      roleAttribute ="admin";
    }
    this.signupForm.value.role =roleAttribute;
    console.log(this.signupForm.value);
    this.userService.sendRequestToSignup(this.signupForm.value).subscribe(
      (data)=> {
        console.log("signup response from BE",data.code);
        if (data.code == '0'){
          this.errMessage= "email already exists"
        }else{
          this.router.navigate(['login']);
        }
      }
    );

  }

}
