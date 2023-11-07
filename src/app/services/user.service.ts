import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { LoginResponse } from '../models/LoginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private tokenKey = 'auth_token';
    private BASE_URL = 'http://localhost:8080/users';
    private LOGIN_ENDPOINT = '/login';
    private REGISTER_ENDPOINT = '/register';
  
    constructor(private http: HttpClient) { }
    setToken(token: string): void {
      sessionStorage.setItem(this.tokenKey, token);
    }
  
    getToken(): string | null {
      return sessionStorage.getItem(this.tokenKey);
    }
  
    clearToken(): void {
      sessionStorage.removeItem(this.tokenKey);
    }

    
    login(user: User): Observable<LoginResponse> {
      const url = this.BASE_URL + this.LOGIN_ENDPOINT;
      return this.http.post<LoginResponse>(url, user);
    }

    register(user: User) {
      
      const url = this.BASE_URL + this.REGISTER_ENDPOINT;
      return this.http.post(url, user);
    }


  
}
