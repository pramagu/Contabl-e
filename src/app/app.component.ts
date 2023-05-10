import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { UserService } from '@app/_services';
import { NotificacionInterface } from './_interfaces/notificacionInterface';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
loading = false;
  user?: User | null;
  listaNotificaciones: NotificacionInterface[] = [];
 

  ngOnInit() {
  }

  constructor(private authenticationService: AuthenticationService,private userService: UserService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

ngOnInit(): void {
    if (this.user != null) {
      this.getNotificaciones();
    }
  }

 getNotificaciones() {
    this.loading = true;
    this.userService.getNotificaciones().subscribe({
      next: (data) => {
        this.loading = false;
        this.listaNotificaciones = data;
        console.log(data);
        console.log(this.listaNotificaciones);
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
