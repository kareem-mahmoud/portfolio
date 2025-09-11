import { Component } from '@angular/core';
import { Projects } from "../shared/projects/projects";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
