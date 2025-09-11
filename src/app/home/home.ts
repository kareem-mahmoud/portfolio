import { Component } from '@angular/core';
import { Projects } from "../shared/projects/projects";
import { Skills } from "../shared/skills/skills";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
