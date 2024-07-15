import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getProjectById(id: string):any  {
    console.log(id);
    var result;
    this.http.get(this.api + '/projects/' + id).subscribe({
      next: (data) => {
        result = data;
      },
    });
    return result;
  }
}
