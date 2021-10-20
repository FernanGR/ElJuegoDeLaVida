import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [TableService]
})
export class TablaComponent implements OnInit {

  @Input() reglas:string;

  tabla:Array<Array<any>>;
  interval:any;
  borde:boolean = true;
  playActive: boolean = true;
  tablaObj:Table;

  constructor(
    private serv: TableService
  ) { }


  ngOnInit(): void {
    // this.tablaObj = this.serv.inicializa();
    this.tabla = this.serv.inicializa();
    console.log(this.tabla);
    // this.tabla = this.tablaObj.getTabla();


   }
 

   modificarEstado(x:number,y:number){
    if(this.tabla[x][y] === 1)
     this.tabla[x][y] = 0;
     else{
      this.tabla[x][y] = 1
     }
    }

oneStep(){
  this.tabla = this.serv.oneStep(this.reglas);
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
  this.serv.dead();
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
