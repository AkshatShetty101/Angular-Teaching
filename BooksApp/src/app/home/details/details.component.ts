import { Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    OnDestroy,

     } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,
OnDestroy,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnChanges {
  @Input('b')book:Book={
    name:"default",
    author:"default",
    desc:"default",
    imgPath:"default"};
    @ViewChild('heading') head: ElementRef;
    constructor() { 
    console.log("Constructor book data :"+this.book);
  }

  ngOnInit() {
    // let bookName =this.book.name;
    // console.log("Book data :"+this.book);
    // console.log('this.book name: '+bookName);
    console.log('Init Called!');
    console.log('Text content:' + this.head.nativeElement.textContent);
  
  }
  
  ngOnChanges() {
    console.log('Changes called!');
  }

  ngDoCheck() {
    console.log('DoCheck called!');
  }

  ngOnDestroy() {
    console.log('Destroy called!');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called!');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called!');
    console.log('Text content:' + this.head.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!');
  }


}
