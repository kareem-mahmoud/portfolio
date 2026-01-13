import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [],
  templateUrl: './first-content.html',
  styleUrl: './first-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstContent {
}
