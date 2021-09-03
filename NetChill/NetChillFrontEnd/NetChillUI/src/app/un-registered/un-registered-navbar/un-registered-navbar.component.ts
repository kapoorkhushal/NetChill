import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-un-registered-navbar',
  templateUrl: './un-registered-navbar.component.html',
  styleUrls: ['./un-registered-navbar.component.scss']
})
export class UnRegisteredNavbarComponent implements OnInit {

  constructor() { }

  Menu : String[] = [
    "Login", "Sign In"
  ];

  ngOnInit(): void {
  }

}
