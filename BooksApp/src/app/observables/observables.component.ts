import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { movingCoordinates } from './functions';

interface Dictionary { [id: string]: any; }

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  dict: Dictionary = {};

  constructor() {}

  ngOnInit() {
  }

  enter(zone: any) {
    console.log('enter:');
    console.log(zone.id);
    this.dict[zone.id] = movingCoordinates(zone).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log(this.dict);
  }

  exit(zone: any) {
    console.log('exit:');
    console.log(zone.id);
    this.dict[zone.id].unsubscribe();
    console.log(this.dict);
  }
 
}
