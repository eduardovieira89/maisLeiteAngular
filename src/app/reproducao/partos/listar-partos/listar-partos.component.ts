import { HttpParams } from '@angular/common/http';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Propriedades } from 'src/app/model/propriedades';
import { Observable } from 'rxjs';
import { Partos } from 'src/app/model/Partos';
import { Component } from '@angular/core';
import { PartosService } from '../partos.service';

@Component({
  selector: 'app-listar-partos',
  templateUrl: './listar-partos.component.html',
  styleUrls: ['./listar-partos.component.css']
})
export class ListarPartosComponent {

  partos$:Observable<Partos[]>;
  errorMessage = '';
  propriedade: Propriedades;

  constructor(private partoService: PartosService,
    private propriedadeService: PropriedadeService) { }

    ngOnInit(): void {
      this.listarPartos();
    }

    listarPartos() {
      this.propriedade = this.propriedadeService.getPropriedadeselecionada();
      if(this.propriedade){
        this.errorMessage = '';
        let params = new HttpParams();
        params = params.set('idpropriedade', this.propriedade.id.toString() )
        this.partos$ = this.partoService.listByPropriedade(params);
      }
    }
}
