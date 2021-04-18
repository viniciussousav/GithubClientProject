import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { PerfilService } from './perfil.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  token = ""
  profile!: User;

  constructor(private perfilService: PerfilService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.token = this.loginService.getObtainedToken();

    this.perfilService.getAuthenticatedUser(this.token).subscribe({
      next: user => {
        this.profile = user;
        this.loginService.setLoginString(this.profile.login);
        console.log(user);
      },
      error: err => console.log('Error while getting authenticated user', err)
    });
  }
}