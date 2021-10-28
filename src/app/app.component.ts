import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

import { TablaDynamicComponent } from './tablaDynamic.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elJuegoDeLaVida';
  reglasJuego:string = "23/3";
  tablaRefArray:ComponentRef<any>[] = []
  @ViewChild("tabla", {read:ViewContainerRef}) tabla: ViewContainerRef;
  tablaRef:ComponentRef<any>

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  newTable(){
    const nTable = this.componentFactoryResolver.resolveComponentFactory(TablaDynamicComponent);
    // this.tabla.createComponent(nTable);
    const component = this.tabla.createComponent(nTable);

    this.tablaRef = component;
    this.tablaRefArray.push(this.tablaRef)
  }

  deleteTable(){
    try{
      this.tablaRefArray[this.tablaRefArray.length-1].destroy();
      this.tablaRefArray.pop();
      // this.tablaRef.destroy();
    }
    catch(e){
    }
  }


}
