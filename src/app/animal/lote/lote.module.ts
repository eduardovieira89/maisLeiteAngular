import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLoteComponent } from './listar-lotes/listar-lotes.component';
import { CriarLoteComponent } from './criar-lote/criar-lote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule, ListarLoteComponent,
        CriarLoteComponent], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class LoteModule { }
