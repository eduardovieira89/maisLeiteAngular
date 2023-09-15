import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais } from 'src/app/model/animais';
import { ProducaoLeite } from 'src/app/model/producaoLeite';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { LactacoesService } from '../lactacoes/lactacoes.service';
import { ControleLeiteiro } from 'src/app/model/controleLeiteiro';

@Injectable({
  providedIn: 'root'
})
export class ProducaoLeiteService extends CrudService<ProducaoLeite> {
  
  private readonly PRODUCAO_PATH = `${environment.API}producaoleite`;
  private readonly CONTROLE_PATH = `${environment.API}controleleiteiro`;

  constructor(
    protected http: HttpClient,
    private lactacaoService: LactacoesService
    ) { 
    super(http, `${environment.API}producaoleite` )
  }

  findLactacao(idVaca: string) {
    return this.lactacaoService.buscaLactacaoEmAberto(idVaca);
  }

  listProducoes(params: HttpParams){
    return this.http.get<ControleLeiteiro[]>(this.CONTROLE_PATH, {params});
  }
}
