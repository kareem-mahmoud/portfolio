import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { aboutMe, ComponentsData} from '../../module/app-module';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMe implements OnInit {

  aboutMeText = signal(aboutMe);
  aboutMeImg = signal(ComponentsData[0].aboutUs.aboutMeImg);

  ngOnInit(): void {
    
  }
}
