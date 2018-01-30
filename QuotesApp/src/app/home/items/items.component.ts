import { Component, OnInit } from '@angular/core';
import { Mockup } from './items.mockup';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemsList:{name:string,author:string}[] = Mockup; 
  constructor() { }

  ngOnInit() {
    console.log(this.itemsList);
  }

}
