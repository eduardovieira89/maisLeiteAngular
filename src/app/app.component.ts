import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropriedadeService } from './service/propriedade.service';
import { TokenstorageService } from './service/tokenstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mais leite';

  private roles: string[];
  isLoggedIn = false;
  showPropriedadeBoard = false;
  username: string;
  nome_propriedade: string;
  mostarMenu: boolean = false;

  constructor(private tokenStorageService: TokenstorageService,
              private propriedadeService: PropriedadeService,
              private router: Router
              ) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.tokenStorageService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostarMenu = mostrar
    );

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showPropriedadeBoard = this.roles.includes('ROLE_PRODUTOR');
      this.username = user.username;

      this.nome_propriedade = this.propriedadeService.getPropriedadeselecionada()?.nome;
    }


  }


  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);
    this.nome_propriedade = '';
    this.username = '';
    this.isLoggedIn = false;
  }

}
