import { FiniquitoFormComponent } from './finiquito/finiquitoForm/finiquitoForm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HistorialComponent } from './products/productos/producto/producto/historial.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HistorialesComponent } from './products/productos/historiales.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HistorialesComponent,
    ProfileComponent,
    HistorialComponent,
    RegisterComponent,
    FiniquitoFormComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    /*   fakeBackendProvider, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
