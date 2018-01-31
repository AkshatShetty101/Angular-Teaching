import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  name='';
  constructor() { }

  ngOnInit() {
  }

  change(){
    if(this.name.length>7){
      this.name="Shit!"
    }
  }
}
