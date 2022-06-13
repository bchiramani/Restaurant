import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users : any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.sendRequestToGetAllUsers().subscribe(
      (data) => {
        this.users=data;
    });
  }
  deleteUser( id:number){
    console.log("delete : ", id);
    this.userService.sendRequestToDeleteUser(id).subscribe(
      ()=>{
        console.log("deleted with success");
        this.getAllUsers()
      }
    );
  }

}
