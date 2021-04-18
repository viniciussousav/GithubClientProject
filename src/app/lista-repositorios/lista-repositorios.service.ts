import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../classes/repository';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ListaRepositoriosService {

  private _REPO_URL = "https://api.github.com/user/repos"

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getListRepositoriesByPage(page: number): Observable<Repository[]> {

    return this.httpClient.get<Repository[]>(`${this._REPO_URL}?page=${page}&per_page=10`, {
      headers: {
        "Authorization": "token " + localStorage.getItem("token")
      }
    })
  }

  getAllListRepositories(): Observable<Repository[]> {

    return this.httpClient.get<Repository[]>(this._REPO_URL, {
      headers: {
        "Authorization": "token " + localStorage.getItem("token")
      }
    });
  }
}
