import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ListaRepositoriosService {



  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getListRepositoriesByPage(page: number){

    let login = this.loginService.getLoginString();
    let token = this.loginService.getObtainedToken();

    return this.httpClient.get<any[]>(`https://api.github.com/user/repos?page=${page}&per_page=10`, {
      headers: {
        "Authorization": "token " + token
      }
    })
  }

  getAllListRepositories(){

    let login = this.loginService.getLoginString();
    let token = this.loginService.getObtainedToken();

    return this.httpClient.get<any[]>(`https://api.github.com/user/repos`, {
      headers: {
        "Authorization": "token " + token
      }
    })
  }
}
