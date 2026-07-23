import { Injectable } from '@angular/core';
import { Skills } from '../../module/models/app-models';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class SkillsServices {
  
  private skills: Skills[] = [
    {
      id: 1,
      category: 'Framework',
      items: [
        'Angular', 
      ]
    },
    {
      id: 2,
      category: 'Framework',
      items: [
        'Angular', 
      ]
    },
    {
      id: 3,
      category: 'Framework',
      items: [
        'Angular', 
      ]
    },
    {
      id: 4,
      category: 'Framework',
      items: [
        'Angular', 
      ]
    },
    {
      id: 5,
      category: 'Framework',
      items: [
        'Angular', 
      ]
    }
  ]

}
