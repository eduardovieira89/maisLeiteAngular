import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LactacaoModule } from './lactacao/lactacao.module';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';
import { AnimalModule } from '../animal/animal.module';


@NgModule({ declarations: [],
    exports: [
        LactacaoModule
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class ProducaoModule { }
