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


  token = ""
  profile: any;

  constructor(private perfilService: PerfilService, private loginService: LoginService) { 

    this.token = this.loginService.getObtainedToken();

    console.log("Profile token " + this.token)

    this.perfilService.getAuthenticatedUser(this.token).subscribe(data => {
      this.profile = data;
      this.loginService.setLoginString(this.profile.login);
      console.log(data);
    })
  }

  ngOnInit(): void {
    
  }

}
