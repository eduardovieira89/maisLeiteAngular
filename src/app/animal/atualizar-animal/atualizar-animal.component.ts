import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { Racas } from 'src/app/model/racas';
import { AnimalService } from 'src/app/animal/animal.service';
import { Lotes } from 'src/app/model/Lotes';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { LotesService } from '../lotes/lotes.service';

@Component({
  selector: 'app-atualizar-animal',
  templateUrl: './atualizar-animal.component.html',
  styleUrls: ['./atualizar-animal.component.css'],
  preserveWhitespaces: true
})
export class AtualizarAnimalComponent implements OnInit {

  id!: number;
  animal!: Animais;
  racas!: Racas[];
  pais!: Animais[];
  maes!: Animais[];
  lotes: Lotes[];
  errorMessage = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private loteService: LotesService
              ) { }

  ngOnInit(): void {
    
    this.animal = new Animais();
    this.id = this.route.snapshot.params['id'];

    this.animalService.loadByID(this.id).subscribe(
        data=>{
          this.animal = data;
        }, error => this.errorMessage = error.error.message);
    this.carregarCampos();
  }

  carregarCampos() {
    let idpropriedade = this.propriedadeService.getPropriedadeselecionada().id.toString()
    let params = new HttpParams();
    params = params.set('idpropriedade', idpropriedade);
    params = params.set('genero', 'm');

    this.animalService.getRacas().subscribe(data => this.racas = data);
    this.loteService.listLotes(this.propriedadeService.getPropriedadeselecionada().id.toString()).subscribe(
      data => this.lotes = data);

    this.animalService.listarPorGenero(params).subscribe(pais => this.pais = pais);
    params.delete('genero');
    params = params.set('genero', 'f');
    this.animalService.listarPorGenero(params).subscribe( maes => this.maes = maes);
    
  }

  atualizarAnimal(){
      this.animalService.save(this.animal).subscribe(
        data=>{
          this.animal = new Animais();
          this.irParaListagem();
        }, error => this.errorMessage = error.error.message);
  }

  irParaListagem(){
    this.router.navigate(['animal']);
  }

  compareRaca(c1: any, c2:any): boolean {     
    return c1 && c2 ? c1.id_raca === c2.id_raca : c1 === c2; 
}
  compareLote(c1: any, c2:any): boolean {     
    return c1 && c2 ? c1.idLotes === c2.idLotes : c1 === c2; 
}

comparePai(c1: any, c2:any): boolean {     
  return c1 && c2 ? c1.id_pai === c2.id_pai : c1 === c2; 
}

compareMae(c1: any, c2:any): boolean {     
  return c1 && c2 ? c1.id_mae === c2.id_mae : c1 === c2; 
}


}
