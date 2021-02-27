import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': '*/*'
  })

  url_authentication: string = "https://github.com/login/oauth/authorize"
  access_token: string = "3bf2d2cc4bc03af5ebc1bdbd676ef1e7fc060787"
  login: string = ""

  constructor(private httpClient: HttpClient) { }

  oauth(username: string) {

    let client_id = "client_id=0067b0833b0ab64757b5"
    let login = `login=${username}`
    let scope = "scope=repo"

    window.location.href = `${this.url_authentication}?${client_id}&${login}&${scope}`
  }

  requestToken(code: string): Observable<any> {

    console.log("getToken from code " + code)

    let body =
    {
      "client_id": "0067b0833b0ab64757b5",
      "client_secret": "f28e1ffe7160e97434ebc81581dedb7b84ff906c",
      "code": code
    }

    return this.httpClient.post('https://github.com/login/oauth/access_token', body, { headers: this.headers });
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
