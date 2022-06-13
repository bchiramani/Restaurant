import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){

    let plats=[
      {id:1,name:"couscous",price:"20",description:"dfghjk"},
      {id:2,name:"makrouna",price:"30",description:"dfghjk"},
      {id:3,name:"ojja",price:"15",description:"cvbn,"},
    ];
    let chefs=[
      {id:1,name:"salah",speciality:"cuisine fr",experience:"5ans"},
      {id:2,name:"ali",speciality:"cuisine ar",experience:"8ans"},
      {id:3,name:"ahmed",speciality:"cuisine tu",experience:"5ans"},
      {id:4,name:"marco",speciality:"cuisine fr",experience:"10ans"},
    ];
    let users=[
      {id:1,firstName:"amani",lastName:"bchir",email:"amani@gmail.com"},
      {id:2,firstName:"maouen",lastName:"maouen",email:"maouen@gmail.com"},
      {id:3,firstName:"abderahmen",lastName:"abderahmen",email:"abderahmen@gmail.com"},
      {id:4,firstName:"helmi",lastName:"helmi",email:"helmi@gmail.com"},
    ];
 
    return {plats, chefs, users};
 
   }
 
}
