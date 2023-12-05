import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { environment } from 'environments/environment.dev';
import { Observable, } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private apiUrl = environment.baseApiUrl;
  private authUrl = this.apiUrl + 'user/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<User[]>(this.authUrl);
  }

  getUserById(userId: string) {
    return this.http.get<User>(this.authUrl + userId, httpOptions);
  }

}
