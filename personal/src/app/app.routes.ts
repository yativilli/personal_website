import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { MyProjectsComponent } from './Components/my-projects/my-projects.component';
import { MyProjectsDetailComponent } from './Components/my-projects-detail/my-projects-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full'},
    {path: 'about', component: AboutMeComponent, pathMatch: 'full'},
    {path: 'projects', component: MyProjectsComponent, pathMatch: 'full'},
    {path: 'projects/new', component: MyProjectsDetailComponent, pathMatch: 'full'},
    {path: 'projects/edit/:id', component: MyProjectsDetailComponent, pathMatch: 'full'},
    {path: 'projects/details/:id', component: MyProjectsDetailComponent, pathMatch: 'full'}
];
