import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from './../_models/userDto';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get<UserDto>(`${environment.apiUser}/user/me`);
  }

  public getHistorial(pagina: number): Observable<any> {
    return this.http.get<any>(
      `${environment.apiHistorial}/historial?page=${pagina}`
    );
  }
    
    public getNotificaciones(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiNotificaciones}/notificaciones`
    );
  }

  public deleteHistorial(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiHistorial}/historial/${id}`);
  }

  public finiquitoRequest(
    diasTrabajadosUltimoMes: number,
    fechaUltimaPaga: string,
    finContrato: string,
    id: number,
    inicioContrato: string,
    pagaExtra: number,
    salarioMensual: number,
    vacacionesDisfrutadas: number,
    vacacionesTotales: number
  ): Observable<any> {
    return this.http.post<any>(
      `${environment.apiOperaciones}/operacion/finiquito`,
      {
        diasTrabajadosUltimoMes,
        fechaUltimaPaga,
        finContrato,
        id,
        inicioContrato,
        pagaExtra,
        salarioMensual,
        vacacionesDisfrutadas,
        vacacionesTotales,
      }
    );
  }

  public register(
    username: string,
    password: string,
    password2: string,
    email: string,
    fullname: string,
    avatar: string
  ): Observable<any> {
    return this.http.post<any>(`${environment.apiUser}/user`, {
      username,
      password,
      password2,
      email,
      fullname,
      avatar,
    });
  }
}
