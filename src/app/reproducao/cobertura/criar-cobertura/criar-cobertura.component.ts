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
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { VacaDTO } from 'src/app/model/vacaDTO';

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
    private semensService: SemenService,
    private route: ActivatedRoute
    ) { super(router, location) }

  cobertura: Cobertura = new Cobertura();
  vacas!: VacaDTO[];
  vacaSelecionada!: VacaDTO;
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

    this.animalService.listarVacasDTO(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(v =>{
        this.vacas = v;
        //Para selecionar a vaca via parametro na url
        const id = this.route.snapshot.params['id'];
        this.vacaSelecionada = this.vacas.find(v => v.id.toString() === id);
        if(!this.vacaSelecionada){
        this.route.queryParams.subscribe(params =>
          this.vacaSelecionada = this.vacas.find(v => v.id.toString() === params['idvaca']));
        }

      });

    this.coberturaService.listTipoCobertura().subscribe(tipos => this.TipoCobertura = tipos);
    this.usuariosService.list().subscribe(users => this.inseminadores = users );
    this.semensService.list().subscribe(sem => this.semens = sem );

  }

  submit(formulario){
    this.cobertura.vaca = new Animal();
    //this.cobertura.vaca.id = this.vacaSelecionada.id;
    this.animalService.loadByID(this.vacaSelecionada.id).subscribe( v => {
      //console.log(v);
      this.cobertura.vaca = v;
      this.coberturaService.save(this.cobertura).subscribe(
      data => {
        //this.cobertura = new Cobertura();
        this.isSuccessful = true;
        this.resetar(formulario);
        //this.irParaListagem('cobertura');
      },
      err => {
        this.errorMessage = err.error.message() ;
        this.isSuccessful = false;
      }
      );
    });
    console.log(this.cobertura);

  }

  alterarTipo(){
    this.cobertura.montaControlada = null ;
    this.cobertura.touroMonta = null ;

    this.cobertura.inseminador = null;
    this.cobertura.qtdeDoseSemen = null;
    this.cobertura.semens = null;
  }

  alterarVaca(){
    this.vacaSelecionada = null;
  }
}
