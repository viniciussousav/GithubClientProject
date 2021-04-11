import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../classes/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url: string = "https://api.github.com/user"

  constructor(private httpClient: HttpClient) { }

  getAuthenticatedUser(token: string): Observable<User>{
    return this.httpClient.get<User>(this.url, {
      headers: {
        "Authorization": "token " + localStorage.getItem("token")
      }
    });
  }
}
