import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData } from '../../../module/content/data';
import { ReButton } from '../../../shared/reusable/re-button/re-button';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ReButton],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe {

  aboutMeContent = signal(ComponentsData[0].aboutMe);

}
