import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Mockup } from './items.mockup';
import { Book } from '../../shared/models/book.model';
import { BookService } from '../../shared/services/book.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  //Stage 0
  // itemsList:{name:string,author:string}[] = Mockup; 
  // constructor() { }
  // ngOnInit() {
  // }
  //Stage 1
  // //Using model
  // // itemsList:Book[] = Mockup;
  // itemsList:{name:string,author:string}[];
  // constructor(private bookservice : BookService) { }

  // ngOnInit() {
  //   //Accessing data from service
  //   this.itemsList = this.bookservice.getList();
  //   console.log(this.itemsList);
  // }

  //Stage 2
  @Output('lb') loadbook = new EventEmitter<string>();
  itemsList: { name: string, author: string }[];
  constructor(private bookservice: BookService) { }

  ngOnInit() {
    //Accessing data from service
    this.itemsList = this.bookservice.getList();
    console.log(this.itemsList);
  }

  loadIt(data: { name: string }) {
    console.log(data);
    this.loadbook.emit(data.name);
  }
}
