import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReButton } from '../re-button/re-button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ReButton],
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
