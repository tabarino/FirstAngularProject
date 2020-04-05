import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials);
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}
