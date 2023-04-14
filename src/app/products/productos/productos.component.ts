import { Content } from './../../_interfaces/productoInterface';
import { UserDto } from './../../_models/userDto';
import { Component } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  loading = false;
  listadoProductos: any;
  pagina: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getProductos().subscribe({
      next: (data) => {
        this.loading = false;
        this.pagina = data.pageable.pageNumber;
        this.listadoProductos = data.content;
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
