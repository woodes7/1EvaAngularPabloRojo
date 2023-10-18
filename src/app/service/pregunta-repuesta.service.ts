import { Injectable } from '@angular/core';
import { LISTADO_PREGUNTAS } from '../modelo/lista-preguntas';
import { Observable, of } from 'rxjs';
import { Pregunta } from '../modelo/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaRepuestaService {

  constructor() { }

  GetPreguntas(): Observable<Pregunta[]>{
    return of(LISTADO_PREGUNTAS);
  }

  GetPreguntaByIndex(index: number): Pregunta{
    for(let i = 0; i < LISTADO_PREGUNTAS.length;i++){
      if(index == i)
        return LISTADO_PREGUNTAS[i];
    }
    return null;
  }
}
