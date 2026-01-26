import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionModule, NgbAccordionToggle, NgbModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/usuario/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PropriedadeService } from './propriedade/propriedade.service';
import { TokenstorageService } from './usuario/tokenstorage.service';
import { RouterOutlet } from '@angular/router';
import { NavbarHeader } from "./navbar-header/navbar-header"; 

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    NavbarHeader
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Mais leite';

  

}
