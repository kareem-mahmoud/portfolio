import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../module/models/app-models';
import { ProjectServices } from '../../../services/projects/project-services'
import { ProjectCard } from '../../../shared/reusable/project-card/project-card';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, RouterLink],
  providers: [ProjectServices],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects implements OnInit {

  private projectsService = inject(ProjectServices, { self: true });
  projectsList = signal<Project[]>([]);

  renderProjectsSection() {
    if (!this.projectsService) return;
    this.projectsService.getProjects().subscribe((projects: Project[]) => {
      // keep only the latest 4 projects and shuffle them
      const lastFourProjects = projects.slice(-4).sort(() => Math.random() - 0.5); 
      this.projectsList.set(lastFourProjects);
    });
  }

  ngOnInit(): void {
    this.renderProjectsSection();
  }



}

