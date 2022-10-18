import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { Propriedades } from 'src/app/model/propriedades';
import { AnimalService } from 'src/app/shared/animal.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MotivosBaixa } from 'src/app/model/motivosBaixa';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css'],
  preserveWhitespaces: true
})
export class ListarAnimalComponent implements OnInit {

  animais$:Observable<Animais[]>;
  motivosBaixa: MotivosBaixa[];
  propriedade: Propriedades;
  baixaModalRef: BsModalRef;
  @ViewChild('baixaModal') baixaModal;
  animalSelecionado: Animais;
  motivoSelected: MotivosBaixa;

  constructor(private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private router: Router,
              private modalService: BsModalService
              ) { }

  ngOnInit(): void {
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    if(this.propriedade){
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.animais$ = this.animalService.listByPropriedade(params);
      this.animalService.getMotivosBaixa().subscribe(
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

  baixaAnimal(animal: Animais){
    this.animalSelecionado = animal;
    this.baixaModalRef = this.modalService.show(this.baixaModal, {class: 'modal-sm'}) ;
   /**  this.animalService.remove(animal.id).subscribe(
      data => {
        this.listarAnimais();
      },
      error => console.log(error)
    ); */
  }

  onConfirmBaixa(){
    let params = new HttpParams();
      params = params.set('idmotivo', this.motivoSelected.id_motivos_baixa.toString() )
    this.animalService.baixaAnimal(this.animalSelecionado.id, this.motivoSelected).subscribe(
      success => {
        this.baixaModalRef.hide();
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
