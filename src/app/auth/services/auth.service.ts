import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';


@Injectable({
  providedIn: 'root'
}) // @injectable decorator is used to declare the services.
export class AuthService {
api = '/api/users/';
constructor(private httpClient: HttpClient) {}

registerUser(register: Register): Observable<any> {
  return this.httpClient.post(this.api + 'register', register);
}

loginUser(login: any): Observable<any> {
  return this.httpClient.post(this.api + 'login', login);
}

}
