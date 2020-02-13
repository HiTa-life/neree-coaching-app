import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Strength } from './strength';
import { map } from 'rxjs/operators';

const localUrlIndex = "http://localhost:8000/user/energy/values/creation/";
const  localUrlPost = "http://localhost:8000/user/energy/values/creation/new"

@Injectable({
  providedIn: 'root'
})
export class StrengthService {

  constructor(private http: HttpClient) { }

  getStrength(): Observable<Strength[]> {
    return this.http.get(
      localUrlIndex
    )
      .pipe(map((res: { json: () => any; }) => {
        let modifiedResult = res.json();
        modifiedResult = modifiedResult.map(function (strength) {
          strength.isUpdating = false;
          return strength;
        });
        return modifiedResult
      }));
  }

//   postStrength(){
//    const formData = this.strengthForm.value;
//    this.http.post(localUrlPost, 
//    formData)
//    .subscribe(
//   formData => this.strength.push(this.strengthForm.value))
//   console.log(formData)
// }
}
