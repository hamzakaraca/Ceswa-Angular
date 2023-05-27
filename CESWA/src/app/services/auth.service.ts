import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelperService: JwtHelperService = new JwtHelperService();
  apiUrl = `${environment.apiUrl}Auth/`;
  constructor(private httpClient: HttpClient) {}

  
  login(loginModel: LoginModel) {
    let newPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  registerCorporate(registerModel: RegisterModel) {
    let newPath = this.apiUrl + 'registercorporate';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      registerModel
    );
  }

  registerIndividual(registerModel: RegisterModel) {
    let newPath = this.apiUrl + 'registerindividual';
     return this.httpClient.post<SingleResponseModel<TokenModel>>(
       newPath,
       registerModel
     );
  }

  get getToken() {
    return localStorage.getItem('token');
  }
  get getDecodedToken() {
    let token = this.getToken;
    return this.jwtHelperService.decodeToken(token);
  }

  get getCurrentUserId() {
    let decodedToken = this.getDecodedToken;
    let nameidentifierString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/nameidentifier')
    )[0];
    let userId: number = decodedToken[nameidentifierString];
    return userId;
  }


  loggedIn() {
    let token = this.getToken;
    if (this.jwtHelperService.isTokenExpired(token)) {
      localStorage.removeItem('token');
    }
    return !this.jwtHelperService.isTokenExpired(token);
  }

  isCorporateAdmin() {
    if (!this.loggedIn()) return false;

    let decodedToken = this.getDecodedToken;

    let roleString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/role')
    )[0];

    if (roleString)
      if (typeof decodedToken[roleString] !== typeof '') {
        for (let i = 0; i < decodedToken[roleString].length; i++)
          if (decodedToken[roleString][i] === 'corporate.admin') return true;
      } else {
        if (decodedToken[roleString] === 'corporate.admin') return true;
      }

    return false;
  }

  isAdmin() {
    if (!this.loggedIn()) return false;

    let decodedToken = this.getDecodedToken;

    let roleString = Object.keys(decodedToken).filter((t) =>
      t.endsWith('/role')
    )[0];

    if (roleString)
      if (typeof decodedToken[roleString] !== typeof '') {
        for (let i = 0; i < decodedToken[roleString].length; i++)
          if (decodedToken[roleString][i] === 'admin') return true;
      } else {
        if (decodedToken[roleString] === 'admin') return true;
      }

    return false;
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
