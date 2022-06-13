import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch : string): any {
    // var resultat= '';
    // let tab=['a','e','y','u','i','o','A','E','Y','U','I','O'];
    // for (let i = 0; i < ch.length; i++) {
    //   for(var j = 0; j <tab.length ;j++){
    //     if(ch[i]==tab[j]){
    //       resultat+="*";
    //       break;
    //     }
        
    //   }
    //   if(j=ch.length){
    //     resultat+=ch[i];
    //   }
    // }
    // return resultat;
       
    ch='  amani  amani   ';
    var resultat = "";
    var espace=false;
    for(var i=0; i<ch.length; i++){
     
      if(ch[i]==' '&& !espace){
        resultat+='-';
        espace=true;

      } else if(ch[i]==' '&& espace) {
        espace=true;
        
        resultat+=ch[i];
      }else{
      
        resultat+=ch[i];
        espace=false;
      }
    }
    console.log(resultat);
    return resultat;
  }

}
