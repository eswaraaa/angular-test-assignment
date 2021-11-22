import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://api.github.com/search/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findByUser(user) {
    return this.http.get(`${baseUrl}?q=${user}%20in:login`);
  }
}
