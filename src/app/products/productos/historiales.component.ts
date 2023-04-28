import { Component } from '@angular/core';
import { UserService } from '@app/_services';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: ['./historiales.component.css'],
})
export class HistorialesComponent {
  loading = false;
  listadoHistoriales: any;
  pagina: any;
  totalPaginas!: number;
  listaPaginas: number[] = [];
  notyf: any;

  constructor(private userService: UserService) {
    this.notyf = new Notyf();
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getHistorial(0).subscribe({
      next: (data) => {
        this.loading = false;
        this.pagina = data.pageable.pageNumber;
        this.listadoHistoriales = data.content;
        this.totalPaginas = data.totalPages;
        for (let index = 0; index < this.totalPaginas; index++) {
          this.listaPaginas.push(index);
        }
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  public showSuccess(): void {
    this.notyf.success('Funciona');
  }

  onClick(pagina: number) {
    this.listaPaginas = [];
    this.loading = true;
    this.userService.getHistorial(pagina).subscribe({
      next: (data) => {
        this.loading = false;
        this.pagina = data.pageable.pageNumber;
        this.listadoHistoriales = data.content;
        this.totalPaginas = data.totalPages;
        for (let index = 0; index < this.totalPaginas; index++) {
          this.listaPaginas.push(index);
        }
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
