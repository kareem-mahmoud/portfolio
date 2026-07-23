import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Projects } from "./projects/projects";
import { AboutMe } from './about-me/about-me';
import { FirstContent } from "./first-content/first-content";
import { Skills } from '../../shared/skills/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Projects, Skills, AboutMe, FirstContent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class Home {

}
