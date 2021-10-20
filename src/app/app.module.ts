import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { CeldaComponent } from './componentes/celda/celda.component';
import { TablaDynamicComponent } from './tablaDynamic.component';
import { DynamicHostDirective } from './dynamic-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CeldaComponent,
    TablaDynamicComponent,
    DynamicHostDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
