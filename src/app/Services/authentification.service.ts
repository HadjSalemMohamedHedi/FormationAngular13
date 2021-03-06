import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  link: 'http://localhost:3000/api/Users/login';

  constructor(private http: HttpClient) {}

  isLogged() {
    return !!localStorage.getItem('token') ;
  }

  login(Credentials: any) {
    console.log('Credentials');
    console.log(Credentials);
    return this.http.post(this.link, Credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
