import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefURL: string ="http://localhost:3000/api/chefs";
  constructor(private httpClient :HttpClient) { }
  sendRequestToGetAllChefs(){ 
    console.log("here chefService :get all chefs");
    return this.httpClient.get<{message : string , chefs: any}>(this.chefURL);
  }

  sendRequestToDeleteChef(id){
    console.log("here chefService: delete chef");
    return this.httpClient.delete<{message : string }>(`${this.chefURL}/${id}`)
  }
  sendRequestToAddChef(obj:any){
    console.log("here chefService: add chef",obj);
    return this.httpClient.post<{message : string}>(this.chefURL, obj);
  }
  sendRequestToGetChefById(id:number){
    console.log("here chefService: get chef by id");
    return this.httpClient.get<{message : string , chef: any}>(`${this.chefURL}/${id}`);
  }
 
  sendRequestToEditChef(obj:any){
    console.log("here chefService:edit chef ");
    return this.httpClient.put<{message : string}>(`${this.chefURL}/${obj._id}`,obj)
  }
 
  sendRequestToGetChefBySpeciality(obj:any){
    console.log("here chefService: search chef by speciality ",obj);
    
    return this.httpClient.post<{allChefs:any}>(`${this.chefURL}/search`, obj)

  }
  
}
