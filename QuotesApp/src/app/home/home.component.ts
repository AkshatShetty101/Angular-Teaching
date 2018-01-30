import { Component, OnInit } from '@angular/core';
import { Mockup } from './items/items.mockup'
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Stage 0
  // bookDetails:{name:string,author:string,desc:string,imgPath:string}={name:"1",author:"1",desc:"The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling eponymous novel. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.",imgPath:"https://gdblogs.shu.ac.uk/b1006221/wp-content/uploads/sites/207/2014/01/book2.jpg"};
  // //Subscribing to the change

  // constructor() { }

  // ngOnInit() {
  // }

  // Stage 1

  bookDetails:{ Book};
  //Subscribing to the change

  constructor(private bookservice:BookService) { }

  ngOnInit() {
  }

  loadbook(data:string){
    this.bookDetails = this.bookservice.getBook(data);
  }

  clear(){
    console.log("Reached Here!")
    this.bookDetails = null;
  }
}
