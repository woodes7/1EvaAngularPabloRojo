import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pregunta } from 'src/app/modelo/pregunta';
import { PreguntaRepuestaService } from 'src/app/service/pregunta-repuesta.service';

@Component({
  selector: 'app-pregunta-detalles',
  templateUrl: './pregunta-detalles.component.html',
  styleUrls: ['./pregunta-detalles.component.css']
})
export class PreguntaDetallesComponent implements OnInit{

  preguntaIndex: number;
  pregunta: Pregunta;

  constructor(private route: ActivatedRoute, private preguntaService: PreguntaRepuestaService) {    
  }

  ngOnInit(): void {
    this.preguntaIndex = +this.route.snapshot.paramMap.get('id');
    if(this.preguntaIndex!=null){
      this.pregunta = this.preguntaService.GetPreguntaByIndex(this.preguntaIndex);
    }
  }


}
