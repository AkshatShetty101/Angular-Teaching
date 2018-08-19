import { Component,
    OnInit,
    EventEmitter,
    Output } from '@angular/core';
import { BookService } from '../../shared/services/book.service';
import { ConnectService } from '../../shared/services/connect.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  // arr:string[]=['1','2','3'];
  itemList:{name: string,author:string}[];

  @Output('lb') loadBook = new EventEmitter<string>();

  constructor(
    private bookservice:BookService,
    private connservice: ConnectService
  ) { }
  ngOnInit() {
    this.itemList = this.bookservice.getList();
    console.log(this.itemList);
  }

  loadIt(data:{name:string}){
    console.log('Reached items component with details');
    this.loadBook.emit(data.name);
  }

  bookClicked(name: string) {
    this.connservice.bookClicked(name);
  }
}
