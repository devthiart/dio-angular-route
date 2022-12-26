import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.firstChild?.params.subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
