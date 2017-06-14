import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {
  private usersUrl = 'api/users';
  constructor(private http: Http) { }
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json().data as User[])
    .catch(this.handleError);
  }
  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  update(user: User): Promise<User> {
  const url = `${this.usersUrl}/${user.id}`;
  return this.http
    .put(url, JSON.stringify(user), {headers: this.headers})
    .toPromise()
    .then(() => user)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
  return Promise.reject(error.message || error);
 }
}
