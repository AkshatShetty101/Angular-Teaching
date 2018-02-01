import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  name = '';
  user = "";
  data = "";
  num = "";
  frag = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['user'];
    this.data = this.route.snapshot.params['data'];
    this.num = this.route.snapshot.queryParams['num'];
    this.frag = this.route.snapshot.fragment;
    
    this.route.params
      .subscribe(
        (params) => {
          this.user = params['user'],
          this.data = params['data']
        }
      );
    
    this.route.queryParams
    .subscribe(
      (params) => {
        this.num = params['num']
      }
    );
    this.route.fragment
    .subscribe(
      (fragments) => {
        this.frag = fragments;
      }
    );
  }

  change(){
    if(this.name.length>7){
      this.name="Shit!"
    }
  }

  routeTo(){
    this.router.navigate(['/add_page', 'adhrit', 'from.navigate'], {queryParams:{num:1}, relativeTo:this.route, fragment:'down_here'});
  }
}
