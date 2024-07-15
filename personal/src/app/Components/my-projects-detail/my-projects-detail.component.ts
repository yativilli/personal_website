import { Component, inject, OnInit } from '@angular/core';
import { DbService } from '../../Services/db-service.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Project } from '../../DTOs/ProjectDto';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-projects-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    MatButton,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './my-projects-detail.component.html',
  styleUrl: './my-projects-detail.component.scss',
})
export class MyProjectsDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  constructor(private dbService: DbService, private router: Router) {}

  data: Project = new Project();
  id: any;
  type: string = "";
  ngOnInit(): void {
    // Get Id

    this.getType();
  }

  private getType() {
    // Get Type
    var url = this.router.url;
    if (url.includes('details')) {
      this.data = this.dbService.getProjectById(this.id);
      this.type = 'detail';
    } else if (url.includes('edit')) {
      this.data = this.dbService.getProjectById(this.id);
      this.type = 'edit';
    } else if (url.includes('new')) {
      this.type = 'new';
    }
  }
}
