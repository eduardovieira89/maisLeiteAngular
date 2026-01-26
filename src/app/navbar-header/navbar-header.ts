import { Component } from '@angular/core';
import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionToggle, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../usuario/authentication.service';
import { PropriedadeService } from '../propriedade/propriedade.service';
import { TokenstorageService } from '../usuario/tokenstorage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  imports: [
    RouterModule,  
    NgbModule,
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse,
  ],
  templateUrl: './navbar-header.html',
  styleUrl: './navbar-header.css',
})
export class NavbarHeader {
  username: string;
  nome_propriedade: string;
  isLogged: boolean = false;
  closeResult = '';

  constructor(private authService: AuthenticationService,
              private propriedadeService: PropriedadeService,
              private router: Router,
              private tokenStorageService: TokenstorageService,
              private offcanvasService: NgbOffcanvas
              ) { }


  ngOnInit(): void {
    this.carregaDadosToken();
    PropriedadeService.selecionouPropriedade.subscribe(
      carregou => this.carregaDadosToken()
    )
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
    this.nome_propriedade = '';
    this.username = '';
    this.isLogged = false;
    //console.log('Is Loged in '+ this.isLoggedIn);
  }

  carregaDadosToken(): void {
    const user = this.tokenStorageService.getUser();
    if(user){
      this.isLogged = true;
      //this.showPropriedadeBoard = this.roles.includes('ROLE_PRODUTOR');
      this.username = user.username;
      this.nome_propriedade = this.propriedadeService.getPropriedadeSelecionada()?.nome;
    }
  }

  open(content) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			// (reason) => {
			// 	this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			// },
		);
	}

	// private getDismissReason(reason: any): string {
	// 	if (reason === OffcanvasDismissReasons.ESC) {
	// 		return 'by pressing ESC';
	// 	} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
	// 		return 'by clicking on the backdrop';
	// 	} else {
	// 		return `with: ${reason}`;
	// 	}
	// }
}
