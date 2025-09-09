import { Component, inject, OnInit, signal } from '@angular/core';
import { Project } from '../../module/app-module';
import { ProjectServices } from '../../services/projects/project-services'

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [
    CommonModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {

  private projectsService = inject(ProjectServices);
  projectsList = signal<Project[]>([]);

  renderProjectsSection() {
    const projects = this.projectsService.getHomeProjects();
    return this.projectsList.set(projects);
  }

  ngOnInit(): void {
    this.renderProjectsSection();
    console.log(this.projectsList());
  }



}

