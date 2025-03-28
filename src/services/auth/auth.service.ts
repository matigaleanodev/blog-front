import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _apiUrl = environment.API_URL;
  constructor() {}

  login(user: any) {
    return this._http.post(`${this._apiUrl}/auth/login`, user);
  }

  refreshToken() {
    return this._http.post(`${this._apiUrl}/auth/refresh`, {});
  }
}
