import { Injectable } from '@angular/core';
import { LISTADO_ASIGNATURAS } from '../modelo/lista-asignatura-profesores';
import { Observable, of } from 'rxjs';
import { Asignatura } from '../modelo/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

 

  constructor() { }

  GetAsginaturas(): Observable<Asignatura[]>{
    return of(LISTADO_ASIGNATURAS);
  }

  GetAsignaturaByIndex(index: number): Asignatura{
    for(let i = 0; i < LISTADO_ASIGNATURAS.length;i++){
      if(index == i)
        return LISTADO_ASIGNATURAS[i];
    }
    return null;
  }

}
