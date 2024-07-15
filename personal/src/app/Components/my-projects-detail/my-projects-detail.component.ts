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

  constructor(private dbService: DbService, private router: Router) {
  }

  id: any;
  name: string = '';
  description: string = '';
  repository: string = '';
  image: string = '';
  in_collaboration_with: string = '';
  purpose: string = '';
  status: string = '';

  data: Project = new Project();
  type: string = '';

  ngOnInit(): void {
    // Get Id
    this.route.paramMap.subscribe((params) => {
      setTimeout(() => {
        this.id = params.get('id');
        if (this.id) {
          this.getType();
          this.loadValues();
        }
      }, 0);
    });
  }

  private getType() {
    // Get Type
    var url = this.router.url;
    if (url.includes('details')) {
      this.data = this.dbService.getAllProjects()[0]//getProjectById(this.id)[0];
      this.loadValues();
      this.type = 'detail';
    } else if (url.includes('edit')) {
      this.data = this.dbService.getAllProjects()[0]//getProjectById(this.id)[0];
      this.loadValues();
      this.type = 'edit';
    } else if (url.includes('new')) {
      this.type = 'new';
    }
    this.loadValues();
  }


  private loadValues() {
    this.name = this.data?.name;
    this.description = this.data?.description;
    this.repository = this.data?.repository;
    this.image = this.data?.image;
    this.in_collaboration_with = this.data?.in_collaboration_with;
    this.purpose = this.data?.purpose;
    this.status = this.data?.status;
  }

  protected checkType(){
    var type = this.type;
    if(type){
      if(type == "edit"){ return false; }
      if(type == "new"){ return false; }
      if(type == "detail"){ return true; }
    }
    return false;
  }
}
