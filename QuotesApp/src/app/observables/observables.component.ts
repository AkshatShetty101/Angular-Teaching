import { Component, OnInit } from '@angular/core';

import { Coordinates } from './functions';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

interface Dictionary { [id: string]: any; }

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  dict: Dictionary = {};

  constructor() { }

  ngOnInit() { }

  enter(zone: string) {
    console.log('enter: ' + zone);
    /*
      Basic Dictionary Test
      this.dict[zone] = zone;
    */
    this.dict[zone] = Coordinates()
      .subscribe(
      (coords: any) => {
        console.log(coords);
      });
    console.log(this.dict);
  }

  exit(zone: string) {
    console.log('exit: ' + zone);
    /*
      Basic Dictionary Test
      this.dict[zone] = zone;
    */
    this.dict[zone].unsubscribe();
    console.log(this.dict);
  }

}
