import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  f = 20; // número de filas
  c = 18; // número de columnas
  tab:Array<Array<any>> = [];
  auxTab:Array<Array<any>> = [];

  constructor() { }



  inicializa(): Array<Array<any>>{
    for(let y=0; y <= this.f-1; y++){
      let columna = [];
      for(let x = 0; x <= this.c-1; x++){
         columna.push(Math.round((Math.random() * 1)))
      }
      this.tab.push(columna)
    }
    return this.tab;
  }

  crearMatrizB(){
    this.auxTab = [];
     for(let y=0; y <= this.f-1; y++){
      let columna = [];
      for(let x = 0; x <= this.c-1; x++){
          columna.push(this.tab[y][x])
      }
      this.auxTab.push(columna)
    }
  }

  crearMatrizA(){
    this.tab = [];
     for(let y=0; y <= this.f-1; y++){
      let columna = [];
      for(let x = 0; x <= this.c-1; x++){
          columna.push(this.auxTab[y][x])
      }
      this.tab.push(columna)
    }
  }

  crearMatrizAB(matrizA:Array<Array<any>>,matrizB:Array<Array<any>>):Array<Array<any>>{
    matrizA = [];
     for(let y=0; y <= this.f-1; y++){
      let columna = [];
      for(let x = 0; x <= this.c-1; x++){
          columna.push(matrizB[y][x])
      }
      matrizA.push(columna)
    }
    return matrizA;
  }

  oneStepServ(): Array<Array<any>>{
    // this.auxTab = this.tab;
    // this.crearMatrizAB(this.auxTab,this.tab);
    this.crearMatrizB();
    let contV = 0;

    //recorrido de izq a derecha-- fila x columna
    for(let y = 0; y <= this.f-1; y++){
      for(let x = 0; x <= this.c-1; x++){
        contV = this.checkeoAlrededor(y,x);
          if(this.tab[y][x]===1){ // actual viva
            if(contV===2 || contV===3){
              this.auxTab[y][x] = 1;
            }else{
              this.auxTab[y][x] = 0;
            }
          }else{  // actual muerta
            if(contV===3){
              this.auxTab[y][x]=1;
            }else{
              this.auxTab[y][x] = 0;
            }
          }
      }//fin for
    }
    // this.crearMatrizAB(this.tab,this.auxTab)
    this.crearMatrizA();
    return this.tab;

  }//fin one step


  checkeoAlrededor(y:number,x:number): number{
    let contV:number = 0;
    //primera fila
    if(y === 0){  
      if(x===0){  // esquina izquierda
        if(this.tab[y][x+1] === 1){ contV++ }
        if(this.tab[y+1][x] === 1){ contV++ }
        if(this.tab[y+1][x+1] === 1){ contV++ }
      }else // esquina derecha
        if(x === this.c-1){
          if(this.tab[y][x+1] === 1){ contV++ }
          if(this.tab[y+1][x] === 1){ contV++ }
          if(this.tab[y+1][x+1] === 1){ contV++ }

        }else{ //resto fila superior
          if(this.tab[y][x-1] === 1){ contV++ }
          if(this.tab[y+1][x-1] === 1){ contV++ }
          if(this.tab[y+1][x] === 1){ contV++ }
          if(this.tab[y+1][x+1] === 1){ contV++}
          if(this.tab[y][x+1] === 1){ contV++}
        }

    // ultima fila
    }else if(y === this.f-1){  
      if(x===0){//esquina izquierda (abajo)
        if(this.tab[y][x+1] === 1){ contV++ }
        if(this.tab[y-1][x] === 1){ contV++ }
        if(this.tab[y-1][x+1] === 1){ contV++ }
      }else // esquina derecha (abajo)
        if(x === this.c-1){
          if(this.tab[y][x-1] === 1){ contV++ }
          if(this.tab[y-1][x-1] === 1){ contV++ }
          if(this.tab[y-1][x] === 1){ contV++ }

        }else{ //resto fila inferior
          if(this.tab[y][x-1] === 1){ contV++ }
          if(this.tab[y-1][x-1] === 1){ contV++ }
          if(this.tab[y-1][x] === 1){ contV++ }
          if(this.tab[y-1][x+1] === 1){ contV++}
          if(this.tab[y][x+1] === 1){ contV++}
        }

    }else{ // centro 
      if(this.tab[y-1][x-1] === 1){ contV++ }
      if(this.tab[y-1][x] === 1){ contV++ }
      if(this.tab[y-1][x+1] === 1){ contV++ }
      if(this.tab[y][x-1] === 1){ contV++}
      if(this.tab[y][x+1] === 1){ contV++}
      if(this.tab[y+1][x-1] === 1){ contV++ }
      if(this.tab[y+1][x] === 1){ contV++}
      if(this.tab[y+1][x+1] === 1){ contV++}
    }
    return contV;
  }


  muerte(){
    for(let y = 0; y <= this.f-1; y++){
      for(let x = 0; x <= this.c-1; x++){
        this.tab[y][x] =0;
      }
    }
  }

 

}
 
