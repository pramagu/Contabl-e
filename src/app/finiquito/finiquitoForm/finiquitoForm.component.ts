import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';
import { Notyf } from 'notyf';
import { first } from 'rxjs';

@Component({
  selector: 'app-finiquitoForm',
  templateUrl: './finiquitoForm.component.html',
  styleUrls: ['./finiquitoForm.component.css'],
})
export class FiniquitoFormComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  notyf: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.notyf = new Notyf();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      diasTrabajadosUltimoMes: ['', Validators.required],
      fechaUltimaPaga: ['', Validators.required],
      finContrato: ['', Validators.required],
      inicioContrato: ['', Validators.required],
      pagaExtra: ['', Validators.required],
      salarioMensual: ['', Validators.required],
      vacacionesDisfrutadas: ['', Validators.required],
      vacacionesTotales: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  public showError(): void {
    this.notyf.error(
      'Existe algún campo incorrecto, por favor revise el formulario'
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    let fechaPagaDate: Date = this.f.fechaUltimaPaga.value;
    let inicioContratoDate: Date = this.f.inicioContrato.value;
    let finContratoDate: Date = this.f.finContrato.value;
    console.log(fechaPagaDate);
    let fechaPagaAString = '' + fechaPagaDate;
    let inicioContratoAString = '' + inicioContratoDate;
    let finContratoAString = '' + finContratoDate;

    this.error = '';
    this.loading = true;
    this.userService
      .finiquitoRequest(
        this.f.diasTrabajadosUltimoMes.value,
        fechaPagaAString,
        finContratoAString,
        1,
        inicioContratoAString,
        this.f.pagaExtra.value,
        this.f.salarioMensual.value,
        this.f.vacacionesDisfrutadas.value,
        this.f.vacacionesTotales.value
      )
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          this.router.navigate(['/productos']);
          this.notyf.success('Finiquito Calculado Correctamente');
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
          this.showError();
        },
      });
  }
}
