import { Content } from '../../_interfaces/historialInterface';
import { UserDto } from '../../_models/userDto';
import { Component } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: ['./historiales.component.css'],
})
export class HistorialesComponent {
  loading = false;
  listadoHistoriales: any;
  pagina: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getHistorial().subscribe({
      next: (data) => {
        this.loading = false;
        this.pagina = data.pageable.pageNumber;
        this.listadoHistoriales = data.content;
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
