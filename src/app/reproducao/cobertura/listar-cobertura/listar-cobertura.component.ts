import { HttpParams } from '@angular/common/http';
import { CoberturaService } from '../cobertura.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cobertura } from 'src/app/model/cobertura';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  standalone: false,
  selector: 'app-listar-cobertura',
  templateUrl: './listar-cobertura.component.html',
  styleUrls: ['./listar-cobertura.component.css']
})
export class ListarCoberturaComponent implements OnInit {

  coberturas$:Observable<Cobertura[]>;
  errorMessage = '';
  propriedade: Propriedade;

  constructor(private coberturaService: CoberturaService,
              private propriedadeService: PropriedadeService) { }

  ngOnInit(): void {
    this.listarCobertura();

  }
  listarCobertura() {
    this.propriedade = this.propriedadeService.getPropriedadeSelecionada();
    if(this.propriedade){
      this.errorMessage = '';
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.coberturas$ = this.coberturaService.listByPropriedade(params);
    }
  }


}
