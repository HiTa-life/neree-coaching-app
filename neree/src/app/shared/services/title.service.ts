import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private title: Subject<string>;

  constructor() { 
    this.title = new Subject();
  }
  emitTitle(value: string) {
    this.title.next(value);
  }
  getTitle(): Observable<string> {
    return this.title.asObservable();
  }
}
