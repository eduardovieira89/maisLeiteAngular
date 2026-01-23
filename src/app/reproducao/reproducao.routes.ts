import { Component } from '@angular/core';
import { canActivateGuard } from '../shared/guards/auth.guard';
import { Reproducao } from './reproducao/reproducao';
import { Routes } from '@angular/router';
import { PropriedadeGuard } from '../shared/guards/propriedade.guard';

export const REPRODUCAO_ROUTES: Routes = [
  { path: '', component: Reproducao},
  { path: 'animaisdoadores', loadChildren: () => import('./animalDoador/animalDoador.routes').then(a => a.ANIMAL_DOADOR_ROUTES), canActivate:[canActivateGuard]},
  { path: 'cobertura', loadChildren: () => import('./cobertura/cobertura.routes').then(c => c.COBERTURA_ROUTES), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'diagnosticoprenhez', loadChildren: () => import('./diagnostico-prenhez/diagnosticoPrenhez.routes').then(d => d.DIAGNOSTICO_PRENHEZ_ROUTES), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'parto', loadChildren: () => import('./parto/parto.routes').then(p => p.PARTO_ROUTES), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'semem', loadChildren: () => import('./semen/semen.routes').then(s => s.SEMEN_ROUTES), canActivate:[canActivateGuard]},
]
