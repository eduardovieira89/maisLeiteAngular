import { Component, OnInit } from '@angular/core';
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
  isPropriedadeSelecionada = false;
  showPropriedadeBoard = false;
  showProdutorBoard = false;
  username: string;
  nome_propriedade: string;

  constructor(private tokenStorageService: TokenstorageService,
    private propriedadeService: PropriedadeService) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showPropriedadeBoard = this.roles.includes('ROLE_PRODUTOR');
      this.showProdutorBoard = this.roles.includes('ROLE_PRODUTOR');
      
        this.username = user.username;
      

      const propriedade = this.propriedadeService.getPropriedadeselecionada();
      if(propriedade != null){
        this.nome_propriedade = propriedade.nome;
      }
    }


  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
