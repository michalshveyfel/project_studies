import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  baseUrl="https://localhost:44316/api/user/";

  login(username: string, password: string) {
    return this.http.get<User>(this.baseUrl+`login?username=${username}&password=${password}`);
  }

  register(u: User){
    return this.http.post<User>(this.baseUrl+"register",u);
  }
}
