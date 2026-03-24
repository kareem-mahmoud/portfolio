import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData } from '../../module/app-module';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe {

  aboutMeContent = signal<any>(ComponentsData[0].aboutMe);

}
