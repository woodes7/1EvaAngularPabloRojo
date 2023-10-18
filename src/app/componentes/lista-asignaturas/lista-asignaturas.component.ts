import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/modelo/asignatura';
import { AsignaturaService } from 'src/app/service/asignatura.service';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html',
  styleUrls: ['./lista-asignaturas.component.css']
})
export class ListaAsignaturasComponent implements OnInit {
  asignaturas: Asignatura[];
  selectedRow: number;

  constructor(private asignaturaService: AsignaturaService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.asignaturaService.GetAsginaturas().subscribe(
      (response) => {
        this.asignaturas = response;
      }
    );
  }

  seleccionarFila(index: number) {
    this.selectedRow = index;
  }

  verDetalles(index:number){
    this.router.navigate(['/asignaturas-detalle', index]);
  }
}
