
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './shared/_helpers/auth.interceptor';
import ptBr from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);
import { UsuarioModule } from './usuario/usuario.module';
import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem, NgbAccordionModule, NgbAccordionToggle, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        AppComponent,
        FormsModule,
        ReactiveFormsModule,
        NgbAccordionButton,
		NgbAccordionDirective,
		NgbAccordionItem,
		NgbAccordionHeader,
		NgbAccordionToggle,
		NgbAccordionBody,
		NgbAccordionCollapse,
        UsuarioModule,
        NgbModule
    ],
        providers: [
            authInterceptorProviders,
            { provide: LOCALE_ID, useValue: 'pt' },
            { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
