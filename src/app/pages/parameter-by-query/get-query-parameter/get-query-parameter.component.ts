import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-query-parameter',
  templateUrl: './get-query-parameter.component.html',
  styleUrls: ['./get-query-parameter.component.css']
})
export class GetQueryParameterComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
