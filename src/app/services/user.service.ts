import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Create USER
  createUser(user: Object): Observable<Object> {
    return this.http.post(environment.API_URL + '/api/users/', user);
  }

  //Get User
  getUser(id: number): Observable<any> {
    return this.http.get(environment.API_URL + '/api/users/' + id);
  }

  getUsersList(): Observable<any> {
    return this.http.get(environment.API_URL + '/api/users/');
  }

  //Update User
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(environment.API_URL + '/api/users/' + id, value);
  }

  //Delete User
  deleteUser(id: number): Observable<any> {
    return this.http.delete(environment.API_URL + '/api/users/' + id, { responseType: 'text' });
  }





}
