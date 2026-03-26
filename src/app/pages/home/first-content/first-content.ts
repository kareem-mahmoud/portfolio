import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData } from '../../../module/content/data';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [],
  templateUrl: './first-content.html',
  styleUrl: './first-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstContent {

  firstContent = signal(ComponentsData[0].firstContent);

}
