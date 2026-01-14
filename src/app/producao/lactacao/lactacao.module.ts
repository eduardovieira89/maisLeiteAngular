import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLactacaoComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacaoComponent } from './detalhes-lactacao/detalhes-lactacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LactacaoRoutingModule } from './lactacao-routing.module';
import { EncerrarLactacaoComponent } from './encerrar-lactacao/encerrar-lactacao.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { AnimalModule } from 'src/app/animal/animal.module';


@NgModule({ declarations: [
        DetalhesLactacaoComponent,
        ListarLactacaoComponent,
        EncerrarLactacaoComponent
    ],
    exports: [
        ListarLactacaoComponent
    ], imports: [CommonModule,
        LactacaoRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class LactacaoModule { }
