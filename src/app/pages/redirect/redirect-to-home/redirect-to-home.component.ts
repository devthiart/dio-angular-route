import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-to-home',
  templateUrl: './redirect-to-home.component.html',
  styleUrls: ['./redirect-to-home.component.css']
})
export class RedirectToHomeComponent implements OnInit {

  constructor(private navigator:Router) {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.navigator.navigate(['/']);
    }, 5000);
  }

}
