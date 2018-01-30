import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // Stage 0
  // data:{name:string;author:string}={name:"default",author:"dafault"};
  // constructor() {
  // }
  // ngOnInit() {
  //   this.data.name="Book1"
  //   this.data.author="Akshat"
  // }

  // Stage 1
  // // Allowing the variable to be accessed from outside
  // @Input('i') index:number=0;
  // @Input() data:{name:string;author:string}={name:"default",author:"dafault"};
  // constructor() {
  // }
  // ngOnInit() {
  // }


  // Stage 2
  // Allowing the variable to be accessed from outside
  @Input('i') index:number=0;
  @Input() data:{name:string;author:string}={name:"default",author:"dafault"};
  //Emitting custom event
  @Output() loadBook = new EventEmitter<{name:string}>();
  constructor() {
  }
  ngOnInit() {
  }
  loadDetails(){
    console.log('Ready to load book details');
    this.loadBook.emit({name:this.data.name});
  }
}
