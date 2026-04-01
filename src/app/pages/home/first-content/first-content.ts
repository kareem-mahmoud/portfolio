import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentsData } from '../../../module/content/data';
import { ReButton } from "../../../shared/reusable/re-button/re-button";

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [ReButton],
  templateUrl: './first-content.html',
  styleUrl: './first-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstContent {

  firstContent = signal(ComponentsData[0].firstContent);

}
