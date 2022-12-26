import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-parameter',
  templateUrl: './get-parameter.component.html',
  styleUrls: ['./get-parameter.component.css']
})
export class GetParameterComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
