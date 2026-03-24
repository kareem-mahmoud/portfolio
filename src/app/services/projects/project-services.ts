import { inject, Injectable } from '@angular/core';
import { Project } from '../../module/app-module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://portfolio-api.kimostarstarstar.workers.dev/api/projects';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class ProjectServices {

  http = inject(HttpClient);

  getHomeProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(BASE_URL);
  }

  // getProjects(): Project[] {
  //   return this.projects;
  // }

}
