import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  f = 20;
  c = 20;
  tab:Array<Array<any>> = [];
  auxTab:Array<Array<any>>;

  constructor() { }



  inicializa(): Array<Array<any>>{
    for(let x=0; x <= this.c-1; x++){
      let columna = [];
      for(let y = 0; y <= this.f-1; y++){
         columna.push(Math.round((Math.random() * 1)))
      }
      this.tab.push(columna)
    }
    return this.tab;
  }


}
