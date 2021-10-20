import { Injectable } from '@angular/core';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})

export class TableService {
 
  tabla: Table;

  constructor(
    ) {     }
  
    inicializa(){
      this.tabla = new Table();
      return this.tabla.getTabla();
      // return this.tabla;
    }

    oneStep(reglas:string){
      this.tabla.oneStepServ(reglas)
      return this.tabla.getTabla();

    }

    dead(){
      this.tabla.muerte()
    }

}
 
