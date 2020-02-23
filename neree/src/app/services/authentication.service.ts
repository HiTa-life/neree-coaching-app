import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../home/account-creation/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public apiUrl: 'http://localhost:8000/user/energy/values/creation/new';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('id_token')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue():User{
     return this.currentUserSubject.value;
   }

   login(username: string, password:string){
     return this.http.post<any>(this.apiUrl, {username,password})
     .pipe(map(user =>{
       localStorage.setItem('id_token', JSON.stringify(user));
       this.currentUserSubject.next(user);
       return user;
     }));
   }

   logout(){
     localStorage.removeItem('id_token');
     this.currentUserSubject.next(null);
   }

  
}
