import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Location } from '@angular/common';
import { ProjectCard } from '../../shared/reusable/project-card/project-card';
import { Project } from '../../module/models/app-models';
import { ProjectServices } from '../../services/projects/project-services';
import { ReButton } from "../../shared/reusable/re-button/re-button";

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [ProjectCard, ReButton],
  providers: [ProjectServices, Location],
  templateUrl: './all-projects.html',
  styleUrl: './all-projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProjects implements OnInit {

  herfPreventDefault = 'javascript:void(0)';

  private projectsService = inject(ProjectServices, { self: true }); 
  private location$ = inject(Location, { self: true });
  allProjects = signal<Project[]>([]);


  ngOnInit(): void {
    this.RenderAllProjects();
  }



  RenderAllProjects() {
    this.projectsService.getProjects().subscribe({
      next: (items: Project[]) => this.allProjects.set(items),
      error: (err: unknown) => console.error('Error fetching projects:', err)
    });
  }

  goBack() {
    if (window.history.length > 1) {
        this.location$.back();
    } else {
        // If there's no history, navigate to a default page (e.g., home)
        window.location.href = '/';
    }
  }


}
