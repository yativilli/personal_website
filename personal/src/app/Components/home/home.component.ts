import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    RouterLink,
    MatButton,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
