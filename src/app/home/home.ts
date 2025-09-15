import { Component } from '@angular/core';
import { Projects } from "../shared/projects/projects";
import { Skills } from "../shared/skills/skills";
import { AboutMe } from '../shared/about-me/about-me';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Projects, Skills, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
