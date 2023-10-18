import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaPreguntasComponent } from './componentes/lista-preguntas/lista-preguntas.component';
import { ListaAsignaturasComponent } from './componentes/lista-asignaturas/lista-asignaturas.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PreguntaDetallesComponent } from './componentes/pregunta-detalles/pregunta-detalles.component';
import { AsignaturaDetallesComponent } from './componentes/asignatura-detalles/asignatura-detalles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'preguntas', component: ListaPreguntasComponent},
  {path:'preguntas-detalle/:id', component: PreguntaDetallesComponent},
  {path:'asignaturas', component: ListaAsignaturasComponent},
  {path:'asignaturas-detalle/:id', component: AsignaturaDetallesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaPreguntasComponent,
    ListaAsignaturasComponent,
    CabeceraComponent,
    PreguntaDetallesComponent,
    AsignaturaDetallesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
