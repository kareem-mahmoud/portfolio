import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData} from '../../module/app-module';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [],
  templateUrl: './first-content.html',
  styleUrl: './first-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstContent {

  firstContentImg = signal<string>(ComponentsData[0].firstContent.firstContentImg);

}
