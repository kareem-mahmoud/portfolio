import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe {

  aboutMeImg = signal('about-me.png');
  
}
