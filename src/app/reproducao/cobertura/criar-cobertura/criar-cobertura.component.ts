import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { CoberturaService } from '../cobertura.service';
import { AnimalService } from 'src/app/animal/animal.service';
import { SemenService } from '../../semen/semen.service';
import { TipoCobertura } from 'src/app/model/tipoCobertura';
import { Semen } from 'src/app/model/semen';
import { Usuario } from 'src/app/model/usuario';
import { Cobertura } from 'src/app/model/cobertura';
import { Animal } from 'src/app/model/animal';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-cobertura',
  templateUrl: './criar-cobertura.component.html',
  styleUrls: ['./criar-cobertura.component.css']
})
export class CriarCoberturaComponent extends BaseFormComponent implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location, 
    private coberturaService: CoberturaService,
    private animalService: AnimalService,
    private propriedadeService: PropriedadeService,
    private usuariosService: UserService,
    private semensService: SemenService
    ) { super(router, location) }

  cobertura: Cobertura = new Cobertura();
  vacas: Animal[];
  tourosMonta: Animal[];
  inseminadores: Usuario[];
  semens: Semen[];
  TipoCobertura: TipoCobertura[];
  errorMessage = '';
  isSuccessful = false;

  ngOnInit(): void {
    this.isSuccessful = false;
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
    params = params.set('genero', 'm');
    this.animalService.listarPorGenero(params).subscribe(t => this.tourosMonta = t);

    params.delete('genero');
    params = params.set('genero', 'f');  
    this.animalService.listarPorGenero(params).subscribe(v => this.vacas = v );

    this.coberturaService.listTipoCobertura().subscribe(tipos => this.TipoCobertura = tipos);
    this.usuariosService.list().subscribe(users => this.inseminadores = users );
    this.semensService.list().subscribe(sem => this.semens = sem );
      
  }

  submit(formulario){
    
    this.coberturaService.save(this.cobertura).subscribe(
      data => {
        //this.cobertura = new Cobertura();
        this.isSuccessful = true;
        this.resetar(formulario);
        this.irParaListagem('cobertura');
      }, 
      err => {
        this.errorMessage = err.error.message() ;
        this.isSuccessful = false;
      }
      );
  }

  alterarTipo(){
    this.cobertura.montaControlada = null ;
    this.cobertura.touroMonta = null ;

    this.cobertura.inseminador = null;
    this.cobertura.qtdeDoseSemen = null;
    this.cobertura.semens = null;
  }
}
