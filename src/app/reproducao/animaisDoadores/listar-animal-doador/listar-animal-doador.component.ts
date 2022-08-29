import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animais } from 'src/app/model/animais';
import { AnimaisDoadoresService } from '../animais-doadores.service';

@Component({
  selector: 'app-listar-animal-doador',
  templateUrl: './listar-animal-doador.component.html',
  styleUrls: ['./listar-animal-doador.component.css']
})
export class ListarAnimalDoadorComponent implements OnInit {

  animaisDoadores$:Observable<AnimaisDoadores[]>;
  errorMessage = '';
  isDeleteError = false;
  constructor(private doadorService: AnimaisDoadoresService) { }

  ngOnInit(): void {
    this.listarDoadores();
  }

  listarDoadores(): void {
    this.errorMessage = '';
    this.isDeleteError = false;
    this.animaisDoadores$ = this.doadorService.list();
  }
  deletarAnimal(id: number){
    this.doadorService.remove(id).subscribe(
      data => {
        this.listarDoadores();
      },
      error => {
        this.isDeleteError = true;
        this.errorMessage = error;
      }
    )
  }

}
