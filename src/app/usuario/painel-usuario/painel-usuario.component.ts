import { Usuarios } from './../../model/usuarios';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { TokenstorageService } from '../../service/tokenstorage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {

  currentProdutor: any;
  isRegistraFuncionario: boolean = false;
  funcionarios: Usuarios[];

  constructor(
    private token: TokenstorageService,
    private location: Location,
    private serviçoAutenticacao: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.currentProdutor = this.token.getUser();
    this.buscaFuncionarios();
  }

  goBack(): void {
    this.location.back();
  }

  registraFuncionario(){
    this.isRegistraFuncionario = !this.isRegistraFuncionario;
  }

  buscaFuncionarios(){
    this.serviçoAutenticacao.listarFuncionarios().subscribe(
      data =>  this.funcionarios = data
      ,
      error => console.log(error)
    );
  }

}
