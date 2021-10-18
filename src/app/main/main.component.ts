import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tabla:Array<Array<any>>;
  fila: number = 20;
  columna: number = 20;

  constructor(
    private serv: ServiceService,
 
  ) {

   }


  ngOnInit(): void {
    this.tabla = this.serv.inicializa();
    console.log(this.tabla);
   }

//    modificarEstado(x:number,y:number, celda:any){
//     if(this.tabla[x][y] === 1)
//      this.tabla[x][y] = 0;
//      else{
//       this.tabla[x][y] = 1
//      }
//      let celdaEstado = celda as HTMLElement;
//      console.log({celdaEstado})
//     //  celdaEstado.className = "";
//      let  idCadena = (celdaEstado.id).split("-");
//      let numX = parseInt(idCadena[0])
//      let numY = parseInt(idCadena[1])
//      console.log(this.tabla[numX][numY])
//     //  .className = "muerto"
//     // if(this.tabla[numX][numY]){
//       console.log(this.tabla[numX][numY])
//       // console.log(celdaEstado.setAttributeNode)
//     // }
// }

   modificarEstado(x:number,y:number){
    if(this.tabla[x][y] === 1)
     this.tabla[x][y] = 0;
     else{
      this.tabla[x][y] = 1
     }
}

oneStep(){
    
}

play(){

}

stop(){

}


}
