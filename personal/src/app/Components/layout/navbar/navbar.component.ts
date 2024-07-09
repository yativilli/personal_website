import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  href: string = '';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // browser code
      this.href = window.location.pathname;
      console.log(this.href);
    }
  }

  get(val: string) {

    if (this.href.replaceAll("/", "") == val || (this.href == "/") && val == "home") {
      return 'blue';
    }
    return 'black';
  }
}
