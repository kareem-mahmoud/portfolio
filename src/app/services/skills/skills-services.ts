import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../../module/models/app-models';
import { Observable } from 'rxjs';

const BASE_URL = 'https://portfolio-api.kimostarstarstar.workers.dev/api/skills';


@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class SkillsServices {
  
  http = inject(HttpClient);

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(BASE_URL);
  }

  

}
