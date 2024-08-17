import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  href: string = '';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.href = window.location.pathname;
    }
  }

  getColor(buttonName: string): string {
    if (this.href.replaceAll("/", "") == buttonName || (this.href == "/" && buttonName == "home")) {
      return 'rgb(184, 181, 181)';
    }
    return 'white';
  }
}
