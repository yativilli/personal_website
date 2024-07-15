import { Component, inject, OnInit } from '@angular/core';
import { DbService } from '../../Services/db-service.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent implements OnInit{

  constructor(protected dbService: DbService){
  }

  data: any;
  ngOnInit(): void {
    this.data = JSON.stringify(this.dbService.getAllProjects());
  }
}
