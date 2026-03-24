import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ComponentsData } from '../../module/app-module';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [],
  templateUrl: './first-content.html',
  styleUrl: './first-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstContent {

  firstContent = signal<any>(ComponentsData[0].firstContent);

}
