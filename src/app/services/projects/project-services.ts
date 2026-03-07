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
      imgUrl: "africano-FI.png",
      description: "lorem ipsum",
      category: "Website",
      stack: "WordPress",
      skills: ["HTML5", "CSS", "JS", "jQuery", "PHP"],
      state: "live",
      liveFlag: true,
      liveUrl: "https://africanosproperties.com/"
    },
    {
      id: 1,
      name: "Africano Pro 2",
      imgUrl: "placeholder.jpg",
      description: "lorem ipsum",
      category: "Other",
      stack: "WordPress",
      skills: ["html", "css", "js"],
      state: "live",
      liveFlag: false,
      liveUrl: "https://wwww.live.com"
    },
    {
      id: 1,
      name: "Africano Pro 3",
      imgUrl: "placeholder.jpg",
      description: "lorem ipsum",
      category: "Website",
      stack: "WordPress",
      skills: ["html", "css", "js"],
      state: "live",
      liveFlag: true,
      liveUrl: "https://wwww.live.com"
    },
    {
      id: 1,
      name: "Africano Pro 4",
      imgUrl: "placeholder.jpg",
      description: "lorem ipsum",
      category: "Project",
      stack: "WordPress",
      skills: ["html", "css", "js"],
      state: "live",
      liveFlag: false,
      liveUrl: "https://wwww.live.com"
    }

  ];

  getHomeProjects(): Project[] {
    return this.projects.slice(0, 4);
  }

  getProjects(): Project[] {
    return this.projects;
  }

}
