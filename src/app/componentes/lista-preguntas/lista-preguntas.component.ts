import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/modelo/pregunta';
import { PreguntaRepuestaService } from 'src/app/service/pregunta-repuesta.service';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css']
})
export class ListaPreguntasComponent implements OnInit{

  preguntas: Pregunta[];
  selectedRow: number;

  constructor(private preguntaService: PreguntaRepuestaService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.preguntaService.GetPreguntas().subscribe(
      (response) => {
        this.preguntas = response;
      }
    );
  }

  seleccionarFila(index: number) {
    this.selectedRow = index;
  }

  verDetalles(index:number){
    this.router.navigate(['/preguntas-detalle', index]);
  }

}
