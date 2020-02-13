import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from './user';
import { Observable, of} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { map } from "rxjs/operators";

const localUrl = "http://localhost:8000/user/account/creation/";
const localUrlShow = "http://localhost:8000/user/account/creation/show"
const localUrlPost = "http://localhost:8000/user/account/creation/new"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
   }

  getUser(): Observable<User[]> {
    return this.http.get(
      localUrl
    )
    .pipe(map((res: { json: () => any; })=> {
      let modifiedResult = res.json();
      modifiedResult = modifiedResult.map(function(user){
        user.isUpdating = false;
        return user;
      });
      return modifiedResult
    }));
  }

  postUser(user: User): Observable<User> {
    return this.http.post(
      localUrlPost, user)
       .pipe(map((res: { json: () => any; })=> {
        let modifiedResult = res.json();
        modifiedResult = modifiedResult.map(function(user){
          user.isUpdating = false;
          return user;
        });
        return modifiedResult
      }));

  // deleteUser(id: string): Observable<User> {
  //   return this.http.delete<User>(localUrl + id);
  // }

  // getUserById(id: string): Observable<any> {
  //   return this.http.get<User>(localUrlShow + id)
  //   .pipe(
  //     retry(3), catchError(this.handleError<User>('getUser'))
  //   );
  // }
  
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     return of(result as T);
  //   };
  // }
  
  // private log(message: string) {
  //   console.log(message);
  // }
    }
  }
