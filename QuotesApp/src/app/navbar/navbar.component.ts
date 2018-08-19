import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../shared/services/connect.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url: any = '/home_dynamic';
  count: number = 0;

  constructor(private connect: ConnectService) {
    const conn$ = this.connect.getConnection();
    conn$.subscribe(
      (num) => {
        console.log(num);
        this.count = num;
        console.log(this.connect.clickedBooks);
      }
    );
  }

  ngOnInit() {}
}
