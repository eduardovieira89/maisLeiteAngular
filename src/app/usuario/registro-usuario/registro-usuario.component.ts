import { DatePipe, JsonPipe, Location, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { FormDebugComponent } from 'src/app/shared/form-debug/form-debug.component';
import { AuthenticationService } from 'src/app/usuario/authentication.service';


@Component({
    selector: 'app-registro-usuario',
    templateUrl: './registro-usuario.component.html',
    styleUrls: ['./registro-usuario.component.css'],
    imports: [FormsModule, NgClass, RouterLink]
})
export class RegistroUsuarioComponent extends BaseFormComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService,
              protected router: Router,
              protected location: Location
            ) 
              { super(router,location) }

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
