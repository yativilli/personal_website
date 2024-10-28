import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../DTOs/ProjectDto';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() { }

  protected http = inject(HttpClient);
  private api: string = (environment.apiHost + ": " + environment.apiPort) || "localhost";

  private projects: Project[] = [];
  private projectById: Project[] = [];

  getAllProjects(): any {
    this.http.get(this.api + '/projects/all').subscribe({
      next: (data) => {
        this.projects = data as Project[];
      },
    });
    return this.projects;
  }

  getProjectById(id: string): Project {
    this.http.get(this.api + '/projects/' + id).subscribe({
      next: (data) => {
        this.projectById = data as Project[];
      },
    });
    return this.projectById[0];
  }

  addProject(project: Project): any {
    this.http.post(this.api + '/projects/new', (project)).subscribe({
      next: (data) => {
        this.getAllProjects();
      }
    })
  }

  editProject(project: Project): any {
    this.http.patch(this.api + '/projects/' + project.id, (project)).subscribe({
      next: (data) => {
        this.getAllProjects();
      }
    })
  }

  deleteProject(id: string): any {
    this.http.delete(this.api + '/projects/' + id).subscribe({
      next: (data) => {
        this.getAllProjects();
      },
    });
    return this.projects;
  }
}
