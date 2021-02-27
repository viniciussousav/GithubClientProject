import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  token = "3bf2d2cc4bc03af5ebc1bdbd676ef1e7fc060787"
  profile: any;

  constructor(private perfilService: PerfilService, private loginService: LoginService) { 

    this.token = this.loginService.getObtainedToken();

    console.log("Profile token " + this.token)

    this.perfilService.getAuthenticatedUser(this.token).subscribe(data => {
      this.profile = data
      this.loginService.setLoginString(this.profile.login)
    })
  }

  ngOnInit(): void {
    
  }

}
