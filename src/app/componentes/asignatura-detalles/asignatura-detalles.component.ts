import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from 'src/app/modelo/asignatura';
import { Pregunta } from 'src/app/modelo/pregunta';
import { AsignaturaService } from 'src/app/service/asignatura.service';

@Component({
  selector: 'app-asignatura-detalles',
  templateUrl: './asignatura-detalles.component.html',
  styleUrls: ['./asignatura-detalles.component.css']
})
export class AsignaturaDetallesComponent implements OnInit{

  asignaturaIndex: number;
  asignatura: Asignatura;

  constructor(private route: ActivatedRoute, private asignaturaService: AsignaturaService) {    
  }

  ngOnInit(): void {
    this.asignaturaIndex = +this.route.snapshot.paramMap.get('id');
    if(this.asignaturaIndex!=null){
      this.asignatura = this.asignaturaService.GetAsignaturaByIndex(this.asignaturaIndex);
    }
  }

}
