import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { movingCoordinates, clickedCoordinates } from './functions';
import { Book } from '../shared/models/book.model';


interface Dictionary { [id: string]: any; }

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  dict: Dictionary = {};
  books: Book[] = [];
  loadedBooks: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  // enter(zone: string) {
  //   console.log('enter: ' + zone);
  //   /*
  //     Basic Dictionary Test
  //     this.dict[zone] = zone;
  //   */
  //   this.dict[zone] = movingCoordinates()
  //     .subscribe(
  //     (coords: any) => {
  //       console.log(coords);
  //     });
  //   console.log(this.dict);
  // }

  // exit(zone: string) {
  //   console.log('exit: ' + zone);
  //   /*
  //     Basic Dictionary Test
  //     this.dict[zone] = zone;
  //   */
  //   this.dict[zone].unsubscribe();
  //   console.log(this.dict);
  // }

  listAllBooks() {
    this.loadedBooks = false;
    const res$ = this.http.get('http://localhost:3443');
    res$.subscribe(
      (booksData: any) => {
        console.log(booksData);
        this.loadBooks(booksData);
        this.loadedBooks = true;
      }
    );
  }

  loadBooks(booksData: any) {
    this.books = [];
    for (let book of booksData) {
      this.books.push(new Book(
        book.name,
        book.author,
        book.desc,
        book.img_path)
      );
    }
  }

  loaded() {
    return this.loadedBooks;
  }

  insertMultiple() {
    let firstBook = JSON.stringify([new Book('First Book', 'Kevin', 'First book of multiple insert', 'Blah')]),
      secondBook = JSON.stringify([new Book('Second Book', 'Akshat', 'Second book of multiple insert', 'More Blah')]),
      headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const first$ = this.http.put('http://localhost:3443/add', firstBook, { headers });
    const second$ = this.http.put('http://localhost:3443/add', secondBook, { headers });
    const res$ = this.http.get('http://localhost:3443');
    const combined$ = Observable.concat(first$, second$, res$).filter((data: any) => data != null);

    this.loadedBooks = false;
    combined$.subscribe(
      (booksData: any) => {
        console.log(booksData);
        this.loadBooks(booksData);
        this.loadedBooks = true;
      }
    );
  }

  retryRequest() {
    // const req$ = this.http.get('http://localhost:3443/flaky').retry();
    const req$ = this.http.get('http://localhost:3443/flaky').retryWhen((errs) => errs.delay(5000));
    this.loadedBooks = false;
    req$.subscribe(
      (booksData: any) => {
        console.log(booksData);
        this.loadBooks(booksData);
        this.loadedBooks = true;
      }
    );
  }
}
