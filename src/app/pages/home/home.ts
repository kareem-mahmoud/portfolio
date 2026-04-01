import { Component } from '@angular/core';
import { Projects } from "./projects/projects";
import { Skills } from "../../shared/skills/skills";
import { AboutMe } from './about-me/about-me';
import { FirstContent } from "./first-content/first-content";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Projects, Skills, AboutMe, FirstContent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
