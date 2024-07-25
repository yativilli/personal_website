import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
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
import { MatSelectModule } from '@angular/material/select';
import { JsonPipe } from '@angular/common';

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
    MatSelectModule,
    JsonPipe
  ],
  templateUrl: './my-projects-detail.component.html',
  styleUrl: './my-projects-detail.component.scss',
})
export class MyProjectsDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  constructor(private dbService: DbService, private router: Router) { }

  id: any;
  data: Project = new Project();
  type: string = '';

  ngOnInit(): void {
    // Get Id
    this.route.paramMap.subscribe((params) => {
      setTimeout(() => {
        this.id = params.get('id');
        if (this.id) {
          this.getType();
          this.data = this.dbService.getProjectById(this.id);
        }
      }, 10);
    });
    if (this.id) {
    }
  }

  private getType() {
    // Get Type
    var url = this.router.url;
    if (url.includes('details')) {
      this.type = 'detail';
    } else if (url.includes('edit')) {
      this.type = 'edit';
    } else if (url.includes('new')) {
      this.type = 'new';
    }
    return this.type;
  }

  protected checkType() {
    var type = this.type;
    if (type) {
      if (type == 'edit') {
        return false;
      }
      if (type == 'new') {
        return false;
      }
      if (type == 'detail') {
        return true;
      }
    }
    return false;
  }

  save() {
    alert(JSON.stringify(this.data))
    if(this.type == 'edit'){

    }else if(this.type == 'new'){

    }
  }
}
