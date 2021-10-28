
export class Table {
    tab = []
    auxTab = []

    constructor(
        //  f = 20,
        //  c = 18,
         tablaRecibida = []

    ) { 
        // this.inicializa();
        this.tab = tablaRecibida;
    }
   
  
    getTabla(){
      return this.tab;
    }

    setTabla(auxTabl){
        this.tab = auxTabl;
    }
    
    inicializa(){
      for(let y=0; y <= this.f-1; y++){
        let columna = [];
        for(let x = 0; x <= this.c-1; x++){
           columna.push(Math.round((Math.random() * 1)))
        }
        this.tab.push(columna)
      }
      return this.tab;
    }
    
    clonarMatriz(matrizA){
      let matrizAuxiliar = [];
    //   console.log(matrizA)
      let filas = matrizA.length;
      let columnas = matrizA[0].length;
      for(let y=0; y <= filas-1; y++){
        let columna = [];
        for(let x = 0; x <= columnas-1; x++){
            columna.push(matrizA[y][x])
        }
        matrizAuxiliar.push(columna)
      }
      return matrizAuxiliar;
    }
  
    oneStepServ(condicion){
        console.log(this.tab)
        console.log("condidcion" + condicion)
      if(condicion ==="" || !!condicion){condicion="23/3"} //por si el input esta vacio
      setTimeout(() => {
          console.log(this.tab)
          
      }, 2000);


    //   this.auxTab = this.clonarMatriz(this.tab);
    //   let contV = 0;
    //   let condiciones = condicion.split('/');
    //   let viva = condiciones[0];
    //   let muerta = condiciones[1];
    //   //recorrido de izq a derecha-- fila x columna
    //   for(let y = 0; y <= this.f-1; y++){
    //     for(let x = 0; x <= this.c-1; x++){
    //       contV = this.checkeoAlrededor(y,x);
    //         if(this.tab[y][x]===1){ // actual viva
    //           if(viva.includes(contV.toString())){  //viva e incluida
    //               this.auxTab[y][x] = 1;
    //             }else{
    //               this.auxTab[y][x] = 0;
    //             }
    //           }else{  // actual muerta
    //             if(muerta.includes(contV.toString())){  //muerta e incluida
    //             this.auxTab[y][x]=1;
    //           }else{
    //             this.auxTab[y][x] = 0;
    //           }
    //         }
    //     }//fin for
    //   }
    //   this.tab = this.clonarMatriz(this.auxTab);
    //   return this.tab;
    }//fin one step
  
  
    checkeoAlrededor(y,x){
      let contV = 0;
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
   
  