import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username_email: string = ""

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let _token = localStorage.getItem("token");
    if (_token) {
      this.loginService.setObtainedToken(_token);
      this.router.navigate(['profile']);
    }
    
    let code = this.route.snapshot.queryParamMap.get("code");
    if (code) {
      this.loginService.requestToken(code).subscribe({
        next: token => {
          if (token.access_token) {
            this.loginService.setObtainedToken(token.access_token);
            localStorage.setItem("token", token.access_token);
            this.router.navigate(['profile']);
          }
        },
        error: err => console.log('Error while trying to sign in', err)
      });
    }
  }

  authenticate(username: string): void {
    window.location.href = this.loginService.oauth(username);
  }
}
