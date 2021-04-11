import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { GithubToken } from '../classes/token'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private client_id: string = "0067b0833b0ab64757b5";
  private access_token: string = ""
  private login: string = ""
  private url_authentication: string = "https://github.com/login/oauth/authorize"

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })

  constructor(private httpClient: HttpClient) { }

  oauth(username: string) {
    return `${this.url_authentication}?client_id=${this.client_id}&login=${username}&scope=[repo]`
  }

  requestToken(code: string): Observable<GithubToken> {

    console.log("getToken from code " + code)

    let body =
    {
      "client_id": this.client_id,
      "client_secret": "f28e1ffe7160e97434ebc81581dedb7b84ff906c",
      "code": code
    }

    return this.httpClient.post<GithubToken>('/login/oauth/access_token', body, { headers: this.headers, responseType: "json"});
  }

  getObtainedToken(): string {
    return this.access_token;
  }

  setObtainedToken(token: string) {
    this.access_token = token;
  }

  getLoginString(): string {
    return this.login;
  }

  setLoginString(login: string) {
    this.login = login
  }
}
