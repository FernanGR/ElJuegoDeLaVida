import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  @Input() datos:number;

  constructor(
    private element: ElementRef,
    private render: Renderer2
      ) {

   }

  ngOnInit(): void {
    if(this.datos===0){
      this.render.setStyle(this.element.nativeElement,"background-color","black")
    }else{
      this.render.setStyle(this.element.nativeElement,"background-color","white")
    }
  }

}
