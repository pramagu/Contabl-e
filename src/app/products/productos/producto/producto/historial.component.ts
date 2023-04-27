import { Component, Input, OnInit } from '@angular/core';
import { Content } from '@app/_interfaces/historialInterface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  @Input()
  public historial: Content;
  public date: Date;

  constructor() {
    this.date = new Date();
    this.historial = {
      nombreUsuario: '',
      nombreOperacion: '',
      fecha: this.date,
      resultado: 0,
    };
  }

  ngOnInit(): void {}
}
