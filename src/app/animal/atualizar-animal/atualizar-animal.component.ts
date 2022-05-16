import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { Raca } from 'src/app/model/raca';
import { AnimalService } from 'src/app/animal/animal.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { RacaService } from 'src/app/service/raca.service';

@Component({
  selector: 'app-atualizar-animal',
  templateUrl: './atualizar-animal.component.html',
  styleUrls: ['./atualizar-animal.component.css'],
  preserveWhitespaces: true
})
export class AtualizarAnimalComponent implements OnInit {

  id!: number;
  animal!: Animal;
  racas!: Raca[];
  pais!: Animal[];
  maes!: Animal[];
  mensagemErro: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private animalService: AnimalService,
              private racaService: RacaService,
              //private propriedadeService: PropriedadeService
              ) { }

  ngOnInit(): void {
    
    this.animal = new Animal();
    this.id = this.route.snapshot.params['id'];

    this.animalService.loadByID(this.id).subscribe(
        data=>{
          this.animal = data;
        }, error => this.mensagemErro = error.error.message);
    this.carregarCampos();
  }

  carregarCampos() {
    this.racaService.getRacas().subscribe(
      data => this.racas = data
    );
    let params = new HttpParams();
    //params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'm');
    this.animalService.listarPorGenero(params).subscribe(
      pais => this.pais = pais);
    params.delete('genero');
    params = params.set('genero', 'f');
    this.animalService.listarPorGenero(params).subscribe(
      maes => this.maes = maes
    )
    
  }

  atualizarAnimal(){
      this.animalService.save(this.animal).subscribe(
        data=>{
          this.animal = new Animal();
          this.irParaListagem();
        }, error => console.log(error));
  }

  irParaListagem(){
    this.router.navigate(['animal']);
  }

  compareRaca(c1: any, c2:any): boolean {     
    return c1 && c2 ? c1.id_raca === c2.id_raca : c1 === c2; 
}

comparePai(c1: any, c2:any): boolean {     
  return c1 && c2 ? c1.id_pai === c2.id_pai : c1 === c2; 
}

compareMae(c1: any, c2:any): boolean {     
  return c1 && c2 ? c1.id_mae === c2.id_mae : c1 === c2; 
}


}
