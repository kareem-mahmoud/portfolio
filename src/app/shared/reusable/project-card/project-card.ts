import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCard {

  projectId = input(0); 
  projectImageUrl = input(''); 
  projectImageAlt = input('');
  projectSkills = input<string[]>([]);
  projectName = input('');
  projectDescription = input('');
  projectLiveFlag = input(false);
  projectLiveUrl = input('');
  projectCategory = input('');
  projectStack = input('');

}
