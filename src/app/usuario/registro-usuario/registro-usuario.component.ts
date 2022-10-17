import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AuthenticationService } from 'src/app/usuario/authentication.service';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent extends BaseFormComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService,
              private router: Router) { super() }

  ngOnInit(): void {
  }


  submit(formulario){
    this.authService.registrar(this.form).subscribe(
      data => {
        this.resetar(formulario);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        //this.router.navigate(['/login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
