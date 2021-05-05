import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { Propriedade } from 'src/app/model/propriedade';
import { AnimalService } from 'src/app/service/animal.service';
import { PropriedadeService } from 'src/app/service/propriedade.service';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css']
})
export class ListarAnimalComponent implements OnInit {

  animais:Animal[];
  propriedades: Propriedade[];
  propriedade: Propriedade = new Propriedade();
  propriedadeSelecionada: boolean = false;

  constructor(private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private router: Router) { }

  ngOnInit(): void {
    this.verificaPropriedadeSelecioanda();
    if(this.propriedadeSelecionada){
      this.listarAnimais();
    }else{
      this.listarPropriedades();
    }
    
  }

  verificaPropriedadeSelecioanda(){
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    if(this.propriedade == null){
      this.propriedadeSelecionada = false;
    } else {
      this.propriedadeSelecionada = true;
    }
  }

  listarAnimais(): void {
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedade.id_propriedade.toString() )
    
    this.animalService.listarAnimais(params).subscribe(
      animais => this.animais = animais)
  }

  listarPropriedades(): void {
    this.propriedadeService.minhasPropriedades().subscribe(
      propriedades => this.propriedades = propriedades
    )

  }

  selecionarPropriedade(id: string): void {
    this.propriedadeService.setPropriedadeSelecionada(id);
    window.location.reload();
  }

  criarAnimal(){
    this.router.navigate(['novoanimal']);
  }

  detalhesAnimal(id: number){
    this.router.navigate(['animal', id]);
  }


}
