import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/usuario/authentication.service';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  if(authService.isAuthenticated() == false){
    router.navigate(['login']);
    return authService.isAuthenticated();
  }
  return authService.isAuthenticated();
}