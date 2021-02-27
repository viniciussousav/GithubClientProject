import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username_email = ""

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    let code = this.route.snapshot.queryParamMap.get("code")
    
    if(code){
      console.log("Requested code " + code);
      // this.loginService.requestToken(code).subscribe(data => {
      //   if(data.access_token){
      //     //this.loginService.setObtainedToken(data.access_token);
              this.router.navigate(['profile']);
      //   }
      // })
    }
  }

  authenticate(): void {

    console.log(this.username_email)

    this.loginService.oauth(this.username_email);
    
  }
}
