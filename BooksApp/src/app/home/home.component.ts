import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string="Home Works!";
  book:Book={
    name: "The Godfather",
    author: "Mario Puzo",
    desc: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling eponymous novel. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.",
    imgPath: "https://gdblogs.shu.ac.uk/b1006221/wp-content/uploads/sites/207/2014/01/book2.jpg"
  };
  constructor(private bookservice:BookService) { }

  ngOnInit() {
  }

  loadIt(data:string){
    this.book = this.bookservice.getBook(data);
  }
}
