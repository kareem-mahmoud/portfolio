import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../module/models/app-models';
import { ProjectServices } from '../../services/projects/project-services';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [RouterLink],
  providers: [ProjectServices],
  templateUrl: './single-project.html',
  styleUrl: './single-project.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProject implements OnInit {

  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectServices, { self: true });

  project = signal<Project | null>(null);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (Number.isNaN(id)) return;

    this.projectService.getProjectById(id).subscribe((project: Project | undefined) => {
      this.project.set(project ?? null);
    });
  }
}
