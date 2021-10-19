import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [TableService]
})
export class TablaComponent implements OnInit {

  @Input() reglas:string;

  tabla:Array<Array<any>>;
  fila: number = 20;
  columna: number = 20;
  interval:any;
  borde:boolean = true;
  playActive: boolean = true;

  constructor(
    private serv: TableService
  ) { }


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
  this.tabla = this.serv.oneStepServ(this.reglas);
  console.log("onestep");
}

play(){
  console.log("play")
  this.playActive = false;
  this.interval = setInterval(()=>{this.oneStep()},1000)
}

stop(){
  console.log("stop")
  clearInterval(this.interval);
  this.playActive = true;
}

muerte(){
  // console.log(this.serv.muerte()) 
  this.serv.muerte();
}

destruir(){
  try{
    // this.tabla.destroy();
}
catch(e){
}
}
celdas(){
  if(this.borde){
    this.borde = false;
  }else{
    this.borde = true;
  }
}

  tabla233(){
    
  }



}
