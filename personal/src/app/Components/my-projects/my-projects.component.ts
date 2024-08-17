import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db-service.service';
import {  RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '../../DTOs/ProjectDto';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit {
  constructor(protected dbService: DbService) { }

  data: Project[] = this.dbService.getAllProjects();
  ngOnInit(): void {
    if (this.dbService) {
      setTimeout(() => {
        this.data = this.dbService.getAllProjects();
      }, 50);
    }
  }

  delete(project: Project) {
    var result = confirm("Do you want to delete the Project '" + project.name + "'?");
    if (result == true) {
      this.dbService.deleteProject(project.id);
    }
  }
}
