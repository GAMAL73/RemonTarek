import { Routes } from '@angular/router';
import { ProjectsComponent } from './layout/pages/projects/projects.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutMeComponent } from './layout/pages/about-me/about-me.component';
import { ExperienceComponent } from './layout/pages/experience/experience.component';
import { HireMeComponent } from './layout/additions/hire-me/hire-me.component';
import { AppelVisionComponent } from './layout/additions/ProjectDetailes/appel-vision/appel-vision.component';
import { FitnessComponent } from './layout/additions/ProjectDetailes/fitness/fitness.component';
import { MadridComponent } from './layout/additions/ProjectDetailes/madrid/madrid.component';
import { RoomizComponent } from './layout/additions/ProjectDetailes/roomiz/roomiz.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'project', component: ProjectsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'hire', component: HireMeComponent},
  {path: 'AppleVesion', component: AppelVisionComponent},
  {path: 'fitness', component: FitnessComponent},
  {path: 'madrid', component: MadridComponent},
  {path: 'roomiz', component: RoomizComponent},
  {path: '**', redirectTo: 'home'},
];
