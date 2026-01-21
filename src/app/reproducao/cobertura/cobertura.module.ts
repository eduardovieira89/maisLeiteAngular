import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DetalhesCoberturaComponent } from './detalhes-cobertura/detalhes-cobertura.component';
import { CriarCoberturaComponent } from './criar-cobertura/criar-cobertura.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoberturaRoutingModule } from './cobertura-routing.module';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarCoberturaComponent } from './listar-cobertura/listar-cobertura.component';
import { PropriedadeModule } from 'src/app/propriedade/propriedade.module';



@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoberturaRoutingModule,
        SharedModule,
        PropriedadeModule, CriarCoberturaComponent,
        DetalhesCoberturaComponent,
        ListarCoberturaComponent], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class CoberturaModule { }
