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

  id: any = "0";
  data: Project = this.dbService.getProjectById(this.id.toString());
  status: string = "";
  type: string = '';

  ngOnInit(): void {
    // Get Id
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.getType();
      if (this.dbService && this.id != undefined) {
        setTimeout(() => {
          this.data = this.dbService.getProjectById(this.id.toString());
          console.log(this.data);
        }, 30);
      }
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

    this.dbService.getProjectById(this.id.toString())
    return this.type;
  }

  protected updateStatus(val: any) {
    this.data.status = val;
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
    this.getType();
    if (this.data && this.data.status != undefined) {
      if (this.type == 'edit') {
        this.dbService.editProject(this.data);
      } else if (this.type == 'new') {
        this.dbService.addProject(this.data);
      }
    }
    this.router.navigate(["/projects/details/" + this.data.id]);
  }
}
