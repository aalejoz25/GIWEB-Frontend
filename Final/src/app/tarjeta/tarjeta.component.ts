import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() numero: string;
  @Input() titulo: string;
  @Input() contenido: string;

  constructor() {
    this.numero = "";
    this.titulo = "";
    this.contenido = "";
  }

  ngOnInit(): void {

  }

}
