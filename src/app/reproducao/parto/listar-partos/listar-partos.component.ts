import { HttpParams } from '@angular/common/http';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Propriedade } from 'src/app/model/propriedade';
import { Observable } from 'rxjs';
import { Parto } from 'src/app/model/Parto';
import { Component } from '@angular/core';
import { PartoService } from '../parto.service';

@Component({
  selector: 'app-listar-partos',
  templateUrl: './listar-partos.component.html',
  styleUrls: ['./listar-partos.component.css']
})
export class ListarPartoComponent {

  partos$:Observable<Parto[]>;
  errorMessage = '';
  propriedade: Propriedade;

  constructor(private partoService: PartoService,
    private propriedadeService: PropriedadeService) { }

    ngOnInit(): void {
      this.listarParto();
    }

    listarParto() {
      this.propriedade = this.propriedadeService.getPropriedadeSelecionada();
      if(this.propriedade){
        this.errorMessage = '';
        let params = new HttpParams();
        params = params.set('idpropriedade', this.propriedade.id.toString() )
        this.partos$ = this.partoService.listByPropriedade(params);
      }
    }
}
