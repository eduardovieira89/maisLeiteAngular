import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { environment } from '../../environments/environment';
import { CrudService } from '../shared/crud-service';
import { Raca } from '../model/raca';
import { MotivoBaixa } from '../model/motivoBaixa';
import { OrigemAnimal } from '../model/origemAnimal';
import { VacaDTO } from '../model/vacaDTO';
import { AnimalMatrizDto } from '../model/animalMatrizDTO';
import { PropriedadeService } from '../propriedade/propriedade.service';


@Injectable({
  providedIn: 'root'
})
export class AnimalService extends CrudService<Animal>{

  private readonly ANIMAL_PATH = `${environment.API}animal`;
  private readonly RACA_PATH = `${environment.API}raca`;
  private readonly MOTIVOS_BAIXA_PATH = `${environment.API}motivosbaixa`;
  private readonly ORIGEM_ANIMAL_PATH = `${environment.API}origemanimal`;
  private readonly BAIXA_ANIMAL_PATH = `${this.ANIMAL_PATH}/baixa`;

  constructor(
    protected http: HttpClient,
    private propriedadeService: PropriedadeService,) {
    super(http, `${environment.API}animal`);
  }

  listByPropriedade(){
    let idPropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};
    return this.http.get<Animal[]>(this.ANIMAL_PATH, options);
  }

  public listarPorGenero(params:HttpParams): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.ANIMAL_PATH + "/genero", { params });
  }

  // public listarPais(idPropriedade: string){
  //   idPropriedade = idPropriedade.trim();
  //   const options = idPropriedade ?
  //   {params: new HttpParams().set('idpropriedade', idPropriedade)} : {};
  //   return this.http.get<Animal[]>(`${this.ANIMAL_PATH}/pais`, options);
  // }

  public listarMatrizes(genero: string){
    let idProp = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    if(idProp && genero){
      genero = genero.trim();
      let params = new HttpParams();
      params = params.set('idpropriedade', idProp);
      params = params.set('genero', genero);
      return this.http.get<AnimalMatrizDto[]>(`${this.ANIMAL_PATH}/matriz`,{params});
    }
    return null;

  }

  public listarEmLactacao(params: HttpParams){
    return this.http.get<Animal[]>(`${this.ANIMAL_PATH}/emlactacao`, {params});
  }
  
  public listarEmLactacaoDTO(){
    let idPropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};
    if(options){
    return this.http.get<VacaDTO[]>(`${this.ANIMAL_PATH}/lactacaodto`, options);
    }else{
      return null;
    }
  }

  public listarPorLote(idLote: string){
    idLote = idLote.trim();
    const options = idLote ?
    {params: new HttpParams().set('idlote', idLote)} : {};

    return this.http.get<VacaDTO[]>(`${this.ANIMAL_PATH}/lote`, options);

  }

  public listarVacasDTO(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    {params: new HttpParams().set('idpropriedade', idPropriedade)} : {};
    return this.http.get<VacaDTO[]>(`${this.ANIMAL_PATH}/vacasdto`, options);
  }

  getRaca(): Observable<Raca[]>{
    return this.http.get<Raca[]>(this.RACA_PATH);
  }

  getMotivoBaixa(): Observable<MotivoBaixa[]>{
    return this.http.get<MotivoBaixa[]>(this.MOTIVOS_BAIXA_PATH);
  }

  getOrigemAnimal(): Observable<OrigemAnimal[]>{
    return this.http.get<OrigemAnimal[]>(this.ORIGEM_ANIMAL_PATH);
  }

  baixaAnimal(id: number, motivo: MotivoBaixa){
    return this.http.put(`${this.BAIXA_ANIMAL_PATH}/${id}`, motivo);
  }

  countAnimaisAtivos(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    {params: new HttpParams().set('idpropriedade', idPropriedade)} : {};

    return this.http.get<number>(`${this.ANIMAL_PATH}/totalativos`, options);
  }

  countAnimaisEmLactacao(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    {params: new HttpParams().set('idpropriedade', idPropriedade)} : {};

    return this.http.get<number>(`${this.ANIMAL_PATH}/totallactacoes`, options);
  }
}
