import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

  getProjects(): Observable<Project[]>{

    return of(Project.projects);
  }
}
