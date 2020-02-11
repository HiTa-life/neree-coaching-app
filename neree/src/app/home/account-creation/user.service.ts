import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, of} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

const localUrl = "http://localhost:8000/user/account/creation/";
const localUrlPost = "http://localhost:8000/user/account/creation/new"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(
      localUrl, { observe: 'response' }
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(
      localUrlPost, user)
      .pipe (
        catchError(this.handleError('addUser', user))
      );
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(localUrl + id);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<User>(localUrl + id)
    .pipe(
      retry(3), catchError(this.handleError<User>('getUser'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}
