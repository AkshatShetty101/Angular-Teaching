import { Component, Input, Output, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  // Stage 1
  // @Input() data:{name:string,author:string,desc:string,imgPath:string};
  // constructor() { }

  // ngOnInit() {
  // }
  @Output() removeBook = new EventEmitter<null>();
  @Input() data: { name: string, author: string, desc: string, imgPath: string };
  @ViewChild('heading') head: ElementRef;
  constructor() {
    console.log('Constructor Called!');
  }

  close() {
    console.log('Here!!');
    this.removeBook.emit();
  }

  // Implementing all lifehooks
  ngOnInit() {
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
