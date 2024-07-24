import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../DTOs/ProjectDto';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  protected http = inject(HttpClient);
  private api: string = 'http://localhost:3000';

  projects: any;

  getAllProjects(): any {
    this.http.get(this.api + '/projects/all').subscribe({
      next: (data) => {
        this.projects = data;
      },
    });
    return this.projects;
  }

  getProjectById(id: string): any {
      console.log(id);
      var result;
      this.http.get(this.api + '/projects/' + id).subscribe({
        next: (data) => {
          result = data;
        },
      });
      return result;
  }

  addProject(project: Project): any{
    this.http.post(this.api + '/projects/new', project).subscribe({
      next: (data) => {
        this.getAllProjects();
      }
    })
  }

  editProject(project: Project): any{
    this.http.patch(this.api + '/projects/' + project.id, project).subscribe({
      next: (data) => {
        this.getAllProjects();
      }
    })
  }

  deleteProject(id: Project): any{
    this.http.delete(this.api + '/projects/' + id).subscribe({
      next: (data) => {
        this.getAllProjects();
      },
    });
    return this.projects;
  }
}
