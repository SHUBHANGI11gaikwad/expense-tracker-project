import { appConfig } from './app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl = 'http://localhost:8080/api/users'; // Update with your backend URL
  setUser: any;

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  loginUser(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { username, password });
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/info`);
  }

  
}
