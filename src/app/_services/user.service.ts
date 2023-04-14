import { Observable } from 'rxjs';
import { UserDto } from './../_models/userDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get<UserDto>(`${environment.apiUrl}/user/me`);
  }

  public getProductos(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/producto`);
  }
}
