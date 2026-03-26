import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData } from '../../module/content/data';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe {

  aboutMeContent = signal(ComponentsData[0].aboutMe);

}
