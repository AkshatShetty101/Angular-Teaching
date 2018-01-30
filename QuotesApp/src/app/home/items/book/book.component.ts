import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // Allowing the variable to be accessed from outside
  @Input() data:{name:string;author:string}={name:"default",author:"dafault"};
  constructor() {
  }
  ngOnInit() {
    // this.data.name="Book1"
    // this.data.author="Akshat"
  }

}
