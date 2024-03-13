import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { Propriedade } from 'src/app/model/propriedade';
import { AnimalService } from 'src/app/animal/animal.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MotivoBaixa } from 'src/app/model/motivoBaixa';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css'],
  preserveWhitespaces: true
})
export class ListarAnimalComponent extends BaseFormComponent implements OnInit {

  animais$:Observable<Animal[]>;
  motivosBaixa: MotivoBaixa[];
  propriedade: Propriedade;
  baixaModalRef: BsModalRef;
  @ViewChild('baixaModal') baixaModal;
  animalSelecionado: Animal;
  motivoSelected: MotivoBaixa;

  constructor(private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              protected router: Router,
              private modalService: BsModalService
              ) { super(router)}

  ngOnInit(): void {
    this.onRefresh();
    
  }

  onRefresh() {
    this.propriedade = this.propriedadeService.getPropriedadeelecionada();
    if(this.propriedade){
      this.animais$ = this.animalService.listByPropriedade(this.propriedade.id.toString());
      this.animalService.getMotivoBaixa().subscribe(
        data => {
          this.motivosBaixa = data;
        }
      );
    }
  }

  criarAnimal(){
    this.router.navigate(['novoanimal']);
  }

  detalhesAnimal(id: number){
    this.router.navigate(['animal', id]);
  }

  baixaAnimal(animal: Animal){
    this.animalSelecionado = animal;
    this.baixaModalRef = this.modalService.show(this.baixaModal, {class: 'modal-sm'}) ;
   /**  this.animalService.remove(animal.id).subscribe(
      data => {
        this.listarAnimal();
      },
      error => console.log(error)
    ); */
  }

  submit(formulario){
    let params = new HttpParams();
      params = params.set('idmotivo', this.motivoSelected.id_motivos_baixa.toString() )
    this.animalService.baixaAnimal(this.animalSelecionado.id, this.motivoSelected).subscribe(
      success => {
        this.baixaModalRef.hide();
        this.resetar(formulario);
        this.onRefresh();
      }
    )
  }
  onDeclineBaixa(){
    this.baixaModalRef.hide();
  }

  alterarAnimal(id: number){
      this.router.navigate(['atualizaranimal', id]);
  }


}
