import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url: string = "https://api.github.com/user"
  username = ""

  constructor(private httpClient: HttpClient) { }

  getAuthenticatedUser(token: string){
    return this.httpClient.get(this.url, {
      headers: {
        "Authorization": "token " + token
      }
    })
  }
}
