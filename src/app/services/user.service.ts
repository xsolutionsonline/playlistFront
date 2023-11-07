import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    private BASE_URL = 'http://localhost:8080/users';
    private LOGIN_ENDPOINT = '/login';
    private REGISTER_ENDPOINT = '/register';
  
    constructor(private http: HttpClient) { }
  
    login(user: User) {
      const url = this.BASE_URL + this.LOGIN_ENDPOINT;
      return this.http.post(url, user);
    }

    register(user: User) {
      debugger;
      const url = this.BASE_URL + this.REGISTER_ENDPOINT;
      return this.http.post(url, user);
    }


  
}
