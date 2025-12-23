import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/usuario/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropriedadeService } from './propriedade/propriedade.service';
import { TokenstorageService } from './usuario/tokenstorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mais leite';

  private roles: string[];
  //showPropriedadeBoard = false;
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
      this.roles = user.roles;
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
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
