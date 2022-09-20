import { UserService } from 'src/app/service/user.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { CoberturasService } from '../coberturas.service';
import { AnimalService } from 'src/app/animal/animal.service';
import { SemensService } from '../../semens/semens.service';
import { TiposCobertura } from 'src/app/model/tiposCobertura';
import { Semens } from 'src/app/model/semens';
import { Usuarios } from 'src/app/model/usuarios';
import { Coberturas } from 'src/app/model/coberturas';
import { Animais } from 'src/app/model/animais';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-criar-coberturas',
  templateUrl: './criar-coberturas.component.html',
  styleUrls: ['./criar-coberturas.component.css']
})
export class CriarCoberturasComponent implements OnInit {

  constructor(private  router: Router,
              private coberturaService: CoberturasService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private usuariosService: UserService,
              private semensService: SemensService
             ) { }

  cobertura: Coberturas = new Coberturas();
  vacas: Animais[];
  tourosMonta: Animais[];
  inseminadores: Usuarios[];
  semens: Semens[];
  TiposCobertura: TiposCobertura[];

  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';
  submitted = false;

  ngOnInit(): void {
    this.carregarCampos();
  }

  carregarCampos() {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'm');
    
    this.animalService.listarPorGenero(params).subscribe(
      t => this.tourosMonta = t);
    params.delete('genero');
    params = params.set('genero', 'f');
    
    this.animalService.listarPorGenero(params).subscribe(
      v => this.vacas = v
    );

    this.coberturaService.listTiposCobertura().subscribe(
      tipos => this.TiposCobertura = tipos
    )

    this.usuariosService.list().subscribe(
      users => this.inseminadores = users
    )

    this.semensService.list().subscribe(
      sem => this.semens = sem
    )

  }

  save(){
    this.coberturaService.save(this.cobertura).subscribe(
      data => {
        this.cobertura = new Coberturas();
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      err => {
        this.errorMessage = err.error.message();
        this.isCreatedFailed = true;
        this.isSuccessful = false;
      }
    )
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
