import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  checked?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  usersList: User[] = [];
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url)
      .pipe(tap((users) => (this.usersList = users)));
  }

  postUsers(newUser: string): Observable<User> {
    return this.http.post<User>(
      this.url,
      newUser,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    );
  }

  deleteUsers(id: number): Observable<unknown> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url)
  }
}
