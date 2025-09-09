import { Injectable } from '@angular/core';
import { Project } from '../../module/app-module';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  
  private projects: Project[] = [
    {
      id: 1,
      name: "Africano Pro",
      imgUrl: "placeholder.png",
      description: "lorem ipsum",
      category: "app",
      skills: ["html", "css", "js"],
      liveFlag: true,
      liveUrl: "live"
    },
    {
      id: 2,
      name: "Africano Pro 2",
      imgUrl: "placeholder.png",
      description: "lorem ipsum",
      category: "app",
      skills: ["html", "css", "js"],
      liveFlag: false,
      liveUrl: "live"
    },
    {
      id: 3,
      name: "Africano Pro 3",
      imgUrl: "placeholder.png",
      description: "lorem ipsum",
      category: "project",
      skills: ["html", "css", "js"],
      liveFlag: true,
      liveUrl: "live"
    },
    {
      id: 4,
      name: "Africano Pro 4",
      imgUrl: "imgUrl",
      description: "lorem ipsum",
      category: "app",
      skills: ["html", "css", "js"],
      liveFlag: true,
      liveUrl: "live"
    }
  ];

  getHomeProjects(): Project[] {
    return this.projects.slice(0, 3);
  }

  getProjects(): Project[] {
    return this.projects;
  }

}
