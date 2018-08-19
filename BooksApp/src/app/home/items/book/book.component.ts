import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('num')index:number=0;
  @Input()data : {name:string,author:string} = {
    name:"default",
    author:"default"}
  
    @Output() loadBook = new EventEmitter<{name:string}>();
  
  // name:string="default";
  // author:string = "default"
  constructor() { }

  ngOnInit() {
  }

  loadDetails(){
    console.log("Ready to load book details");
    this.loadBook.emit({name:this.data.name});
  }

}
