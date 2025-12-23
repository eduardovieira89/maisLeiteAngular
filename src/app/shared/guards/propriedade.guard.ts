import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeGuard  {

  constructor(private router: Router,
              private propriedadeService: PropriedadeService){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!!this.propriedadeService.getPropriedadeSelecionada()){
      return true;
    }

    this.router.navigate(['/propriedade']);
    return false;

  }
}
