import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ListaRepositoriosService {



  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getListRepositories(){

    let login = this.loginService.getLoginString();
    let token = this.loginService.getObtainedToken();

    return this.httpClient.get<any[]>(`https://api.github.com/users/${login}/repos`, {
      headers: {
        "Authorization": "token " + token
      }
    })
  }
}
