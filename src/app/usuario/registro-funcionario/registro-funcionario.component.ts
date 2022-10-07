import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/usuario/authentication.service';

@Component({
  selector: 'app-registro-funcionario',
  templateUrl: './registro-funcionario.component.html',
  styleUrls: ['./registro-funcionario.component.css']
})
export class RegistroFuncionarioComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  isSuccessful = false;
  form: any = {};
  errorMessage = '';
  isSignUpFailed = false;

  ngOnInit(): void {
  }

  cadastraFuncionario(){
    this.authService.registrarFuncionario(this.form).subscribe(
      data => {
        this.isSuccessful= true;
        
      },
      error => this.errorMessage = error.error.message

    );
  }

}
