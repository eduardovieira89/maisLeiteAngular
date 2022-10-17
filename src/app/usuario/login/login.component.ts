import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { TokenstorageService} from '../tokenstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  msg = '';
  roles: string[] = [];
  logouEmitter = new EventEmitter<boolean>();
  

  constructor(private authService: AuthenticationService,
              private router: Router,
              private tokenService: TokenstorageService
              ) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    //  this.roles = this.tokenService.getUser().roles;
    }
  }

  logarUsuario(): void {
    this.authService.login(this.form).subscribe(
      data => {
                this.tokenService.saveToken(data.accessToken);
                this.tokenService.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenService.getUser().roles;
                this.logouEmitter.emit(true);
                this.router.navigate(['/']);
              },
      err => {
                 this.msg = err.error.message;
                 this.isLoginFailed = true;
               }
    );

  }

  gotoregistration(): void{
    this.router.navigate(['/registro']);
  }

  reloadPage() {
    window.location.reload();
    
  }

  deslogar() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.reloadPage();
  }

}
