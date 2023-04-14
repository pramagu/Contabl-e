import { Component, Input, OnInit } from '@angular/core';
import { Content } from '@app/_interfaces/productoInterface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input()
  public producto: Content;

  constructor() {
    this.producto = {
      nombre: '',
      precio: 0,
      categoriaNombre: '',
    };
  }

  ngOnInit(): void {}
}
