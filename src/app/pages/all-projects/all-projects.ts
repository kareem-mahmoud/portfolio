import { Component, inject, OnInit, signal } from '@angular/core';
import { ProjectCard } from '../../shared/reusable/project-card/project-card';
import { Project } from '../../module/models/app-models';
import { ProjectServices } from '../../services/projects/project-services';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [ProjectCard],
  providers: [ProjectServices],
  templateUrl: './all-projects.html',
  styleUrl: './all-projects.scss',
})
export class AllProjects implements OnInit {

  private projectsService = inject(ProjectServices, { self: true }); 
  allProjects = signal<Project[]>([]);

  RenderAllProjects() {
    this.projectsService.getProjects().subscribe({
      next: items => this.allProjects.set(items),
      error: err => console.error('Error fetching projects:', err)
    })

    console.log(this.allProjects());
    
  }

  ngOnInit() {
    this.RenderAllProjects();
  }

}
