import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db-service.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit {
  constructor(protected dbService: DbService) {}

  data: any;
  ngOnInit(): void {
    if (this.dbService) {
      this.data = this.dbService.getAllProjects();
    }
  }
}
