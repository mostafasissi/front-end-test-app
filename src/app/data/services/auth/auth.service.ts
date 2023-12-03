import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL : string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(`${this.BASE_URL}/register`, user);
  }

  loginUser(user: any) {
    return this.http.post(`${this.BASE_URL}/login`, user);
  }

  isLoggedIn() {
    // Check if there's a logged-in user stored in local storage
    const loggedInUser = localStorage.getItem('loggedInUser');
    return !!loggedInUser;
  }

  logout() {
    // Remove logged-in user from local storage
    localStorage.removeItem('loggedInUser');
  }
  

}
