import { TokenstorageService } from './../service/tokenstorage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router,
              private tokenService: TokenstorageService ) { }

  canActivate(  route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                                        ): Observable<boolean> | boolean{
      if (!!this.tokenService.getToken()){
        return true;
      }

      this.router.navigate(['login']);
      return false;
      }
    
}
