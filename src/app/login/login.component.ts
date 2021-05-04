import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { TokenstorageService} from '../service/tokenstorage.service';
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

  constructor(private authService: AuthenticationService,
              private router: Router,
              private tokenStorage: TokenstorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  logarUsuario(): void {
    this.authService.login(this.form).subscribe(
      data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                this.reloadPage();
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

}
