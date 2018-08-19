import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ConnectService {
  subject = new Subject<any>();
  clickedBooks: string[] = [];

  bookClicked(book: string) {
    this.clickedBooks.push(book);
    this.subject.next(this.clickedBooks.length);
  }

  getConnection(): Observable<any> {
    return this.subject.asObservable();
  }

}
