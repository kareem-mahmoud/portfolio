import { inject, Injectable } from '@angular/core';
import { Project } from '../../module/models/app-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://portfolio-api.kimostarstarstar.workers.dev/api/projects';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ProjectServices {

  http = inject(HttpClient);

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(BASE_URL);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map((projects: Project[]) => projects.find((project: Project) => project.id === id))
    );
  }


}
