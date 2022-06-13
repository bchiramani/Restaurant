import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  user :any ={};
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      email : [''],
      password : ['']
    })
  }
  login(user : any) {
    console.log("user Object ", this.user)
    this.userService.sendRequestToLogin(this.user).subscribe( 
      (data)=>{ 
        console.log("Response after login", data)
      }
    );
  }

}
