import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{

  nombre: string;

  ngOnInit(): void {
    this.nombre = "Pablo Rojo Gómez"
  }
  


}
