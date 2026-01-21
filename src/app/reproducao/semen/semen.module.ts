import { SemenRoutingModule } from './semen-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarSemenComponent } from './criar-semen/criar-semen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { ListarSemenComponent } from './listar-semens/listar-semens.component';



@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SemenRoutingModule, CriarSemenComponent,
        ListarSemenComponent], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class SemenModule { }
