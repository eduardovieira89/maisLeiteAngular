import { HttpParams } from '@angular/common/http';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Propriedade } from 'src/app/model/propriedade';
import { Observable } from 'rxjs';
import { Parto } from 'src/app/model/Parto';
import { Component } from '@angular/core';
import { PartoService } from '../parto.service';
import { NgIf, NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listar-partos',
    templateUrl: './listar-partos.component.html',
    styleUrls: ['./listar-partos.component.css'],
    imports: [NgIf, RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class ListarPartoComponent {

  partos$:Observable<Parto[]>;
  errorMessage = '';
  propriedade: Propriedade;

  constructor(private partoService: PartoService) { }

    ngOnInit(): void {
      this.listarParto();
    }

    listarParto() {
        this.partos$ = this.partoService.listByPropriedade();
    }
    
}
