import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skills } from '../../shared/skills/skills';

@Component({
  selector: 'app-all-skills',
  imports: [Skills],
  templateUrl: './all-skills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './all-skills.scss',
})
export class AllSkills {

}
