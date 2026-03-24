import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCard {

  projectImageUrl = input(''); 
  projectImageAlt = input('');
  projectSkills = input<string[]>([]);
  projectName = input('');
  projectDescription = input('');
  projectLiveFlag = input(false);
  projectLiveUrl = input('');
  projectCategory = input('');

}
