import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '@app/_interfaces/historialInterface';
import { UserService } from '@app/_services';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  @Input()
  public historial: Content;
  public date: Date;
  notyf: any;

  constructor(private userService: UserService, private router: Router) {
    this.date = new Date();
    this.historial = {
      id: 0,
      nombreUsuario: '',
      nombreOperacion: '',
      fecha: this.date,
      resultado: 0,
    };
    this.notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
    });
  }

  public showError(message: string): void {
    this.notyf.error(message);
  }

  public showSuccess(message: string): void {
    this.notyf.success(message);
  }

  public eliminarHistorial(id: number) {
    document.getElementById('A' + id)!.style.display = 'none';
    this.userService.deleteHistorial(id).subscribe({
      next: (data) => {
        this.showSuccess('El elemento ha sido borrado correctamente');
      },
      error: (error) => {
        this.showError('Ha ocurrido un error');
      },
    });
  }

  ngOnInit(): void {}
}
