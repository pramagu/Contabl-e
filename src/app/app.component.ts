import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  user?: User | null;
  cookieMessage: string =
    '¡Buenas! Utilizamos Cookies en esta página para asegurarnos de que tienes la mejor experiencia';
  cookieDismiss: string = '¡Entendido!';
  cookieDeny: string = 'No quiero Cookies';
  cookieLinkText: string = 'Información sobre Cookies';
  let cc = window as any;

  ngOnInit() {
    this.cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#3c8cde',
        },
        button: {
          background: '#f1d600',
          text: '#2c2c2c',
          border: 'transparent',
        },
      },
      theme: 'classic',
      type: 'info',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        deny: this.cookieDeny,
        link: this.cookieLinkText,
        href: 'https://cookiesandyou.com',
        policy: 'Cookie Policy',
      },
    });
  }

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authenticationService.logout();
  }
}
