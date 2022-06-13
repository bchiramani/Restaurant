import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //userURL:string="api/users";
  userURL: string ="http://localhost:3000/api/users";

  constructor(private httpClient: HttpClient) { }


  sendRequestToGetAllUsers(){
    return this.httpClient.get(this.userURL)
  }


  sendRequestToDeleteUser(id){
    console.log("here user into service: ",id)
    return this.httpClient.delete(`${this.userURL}/${id}`)
  }

  sendRequestToSignup(user){
    console.log("here user into service user to signup: ",user)
    return this.httpClient.post<{code : string}>(`${this.userURL}/signup`,user)

  }
  sendRequestToLogin(user){
    console.log("here into service user to login: ",user);
    return this.httpClient.post(`${this.userURL}/login`,user);
  }
}
