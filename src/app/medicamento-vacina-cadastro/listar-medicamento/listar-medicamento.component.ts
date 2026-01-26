import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicacaoVacina } from 'src/app/model/medicacaoVacina';
import { MedicamentoCadastroVacinaService } from '../medicamento-vacina-cadastro.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-listar-medicamento',
    templateUrl: './listar-medicamento.component.html',
    styleUrls: ['./listar-medicamento.component.css'],
    imports: [AsyncPipe]
})
export class ListarMedicamentoComponent implements OnInit{

  medicamentos$:Observable<MedicacaoVacina[]>

  constructor(
    private medicamentoService: MedicamentoCadastroVacinaService
  ){}
  ngOnInit(): void {
    this.medicamentos$ = this.medicamentoService.list();
  }

}
