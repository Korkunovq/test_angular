import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'users?page=2');
  }

  getResources(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'unknown');
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + `users/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + `users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + `users/${id}`);
  }
}