import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

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
