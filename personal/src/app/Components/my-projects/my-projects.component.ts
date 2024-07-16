import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db-service.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit{

  constructor(protected dbService: DbService){
  }

  data: any;
  ngOnInit(): void {
    this.data = this.dbService.getAllProjects();
  }
}
