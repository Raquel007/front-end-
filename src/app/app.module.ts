import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ExperienciaYEducacionComponent } from './components/experiencia-y-educacion/experiencia-y-educacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { LogrosComponent } from './components/logros/logros.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    AptitudesComponent,
    ExperienciaYEducacionComponent,
    IniciarSesionComponent,
    LogrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
