import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  templateUrl: './skill-icon.html',
  styleUrl: './skill-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillIcon {
  name = input.required<string>();
  iconName = computed(() => {
    const name = this.name().trim();
    const normalizedName = name.toLowerCase();

    if (['js', 'javascript'].includes(normalizedName)) return 'JS';
    if (['ts', 'typescript'].includes(normalizedName)) return 'TypeScript';
    if (['wordpress', 'wordpress.org'].includes(normalizedName)) return 'WordPress';
    if (['react', 'react.js', 'reactjs'].includes(normalizedName)) return 'React';
    if (['sass', 'scss'].includes(normalizedName)) return 'Sass';
    if (['angular', 'angular.js', 'angularjs'].includes(normalizedName)) return 'Angular';
    if (['express', 'express.js', 'expressjs'].includes(normalizedName)) return 'Express';
    if (['node', 'node.js', 'nodejs'].includes(normalizedName)) return 'Node.js';
    if (['rxjs', 'rx.js'].includes(normalizedName)) return 'RxJS';

    return name;
  });
}
