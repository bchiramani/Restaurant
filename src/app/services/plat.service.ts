import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platURL: string ="http://localhost:3000/api/plats";
  constructor(private httpClient :HttpClient) { }
  sendRequestToGetAllPlats(){ 
    return this.httpClient.get<{message : string , plats: any}>(this.platURL);
  }

  sendRequestToDeletePlat(id){
    console.log("here plat delete into service ",id);
    return this.httpClient.delete<{message : string }>(`${this.platURL}/${id}`)
  }
  sendRequestToAddPlat(obj:any){
    console.log("here obj to send to the BE",obj);
    return this.httpClient.post<{message : string}>(this.platURL, obj);
  }
  sendRequestToGetPlatById(id:number){
    return this.httpClient.get<{message : string , plat: any}>(`${this.platURL}/${id}`);
  }
  //edit :
  /* bech neclickiw ala edit : bech nemchiw l nafes el component mtae el add ama nbadlou chwya hajet
  ki nenzlou nemchiw l edit-plat/:id eli feha hajet mtae  dd(eli bech nbadloha)
  */ 
  sendRequestToEditPlat(obj:any){
    return this.httpClient.put<{message : string}>(`${this.platURL}/${obj._id}`,obj)
  }
  // sendRequestToGetPlatByName(name:any){
  //   return this.httpClient.get(`${this.platURL}/?name=${name}`)
    
  // }
  sendRequestToGetPlatByNameAndPrice(obj:any){
    console.log('`${this.platURL}/search`', `${this.platURL}/search`);
    
    return this.httpClient.post<{allPlats:any}>(`${this.platURL}/search`, obj)

  }
  sendRequestToGetPlatPriceBiggerThan(obj:any){
    console.log(`${this.platURL}/search/price`);
    
    return this.httpClient.post<{allPlats:any}>(`${this.platURL}/search/price`, obj)

  }
  
}
