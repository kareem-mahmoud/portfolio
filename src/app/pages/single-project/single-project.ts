import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { Project } from '../../module/models/app-models';
import { ProjectServices } from '../../services/projects/project-services';
import { Location } from '@angular/common';
import { ReButton } from '../../shared/reusable/re-button/re-button';
import { SkillIcon } from '../../shared/reusable/skill-icon/skill-icon';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ReButton, SkillIcon],
  providers: [ProjectServices, Location],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProject implements OnInit {

  herfPreventDefault = 'javascript:void(0)';
  private projectService = inject(ProjectServices, { self: true });
  private location$ = inject(Location, { self: true });

  id = input<string>()
  project = signal<Project | null>(null);

  ngOnInit(): void {
    const id = Number(this.id());

    if (Number.isNaN(id)) {
      this.project.set(null);
      return;
    } 

    this.projectService.getProjectById(id).subscribe((project: Project | undefined) => {
      this.project.set(project ?? null);
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
