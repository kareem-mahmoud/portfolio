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
    if (
      ['html', 'html5'].includes(normalizedName) ||
      normalizedName.startsWith('html5 ') ||
      (normalizedName.includes('html') && !normalizedName.includes('canvas')) ||
      normalizedName.includes('email development')
    ) return 'HTML5';
    if (
      ['css', 'css3'].includes(normalizedName) ||
      normalizedName.startsWith('css3 ') ||
      (normalizedName.includes('css') && !normalizedName.includes('tailwind'))
    ) return 'CSS3';
    if (normalizedName.includes('flexbox') || normalizedName.includes('responsive design')) return 'CSS3';
    if (['angular cli', 'angular-cli', 'ng cli'].includes(normalizedName)) return 'Angular CLI';
    if (['angular material', 'angular-material'].includes(normalizedName)) return 'Angular Material';
    if (['wordpress', 'wordpress.org'].includes(normalizedName)) return 'WordPress';
    if (['react', 'react.js', 'reactjs'].includes(normalizedName)) return 'React';
    if (['sass', 'scss'].includes(normalizedName)) return 'Sass';
    if (['less', 'less.js'].includes(normalizedName)) return 'LESS';
    if (['angular', 'angular.js', 'angularjs'].includes(normalizedName)) return 'Angular';
    if (['express', 'express.js', 'expressjs'].includes(normalizedName)) return 'Express';
    if (['node', 'node.js', 'nodejs'].includes(normalizedName)) return 'Node.js';
    if (['rxjs', 'rx.js'].includes(normalizedName)) return 'RxJS';
    if (['bootstrap', 'bootstrap 3', 'bootstrap 4', 'bootstrap 5'].includes(normalizedName)) return 'Bootstrap';
    if (['tailwind', 'tailwind css'].includes(normalizedName)) return 'Tailwind CSS';
    if (['git'].includes(normalizedName)) return 'Git';
    if (['github', 'git hub'].includes(normalizedName)) return 'GitHub';
    if (['npm'].includes(normalizedName)) return 'npm';
    if (['nvm'].includes(normalizedName)) return 'nvm';
    if (['vue', 'vue.js', 'vuejs'].includes(normalizedName)) return 'Vue';
    if (['php'].includes(normalizedName)) return 'PHP';
    if (['c/c++', 'c++', 'c plus plus'].includes(normalizedName)) return 'C/C++';
    if (['python'].includes(normalizedName)) return 'Python';
    if (['sql'].includes(normalizedName)) return 'SQL';
    if (['.net', 'dotnet', 'asp.net'].includes(normalizedName)) return '.NET';
    if (['laravel', 'laravel php'].includes(normalizedName)) return 'Laravel';
    if (['mongodb', 'mongo db'].includes(normalizedName)) return 'MongoDB';
    if (['postgresql', 'postgres', 'postgre sql'].includes(normalizedName)) return 'PostgreSQL';
    if (['svg'].includes(normalizedName)) return 'SVG';
    if (['canvas', 'html canvas'].includes(normalizedName)) return 'Canvas';
    if (['figma'].includes(normalizedName)) return 'Figma';
    if (['sketch'].includes(normalizedName)) return 'Sketch';
    if (['invision', 'in vision'].includes(normalizedName)) return 'InVision';
    if (['photoshop', 'adobe photoshop'].includes(normalizedName)) return 'Photoshop';
    if (['illustrator', 'adobe illustrator'].includes(normalizedName)) return 'Illustrator';
    if (['adobe xd', 'xd'].includes(normalizedName)) return 'Adobe XD';
    if (['dreamweaver', 'adobe dreamweaver'].includes(normalizedName)) return 'Dreamweaver';
    if (['toolset', 'wordpress toolset', 'toolset wordpress'].includes(normalizedName) || normalizedName.includes('toolset')) return 'Toolset';
    if (['astra'].includes(normalizedName)) return 'Astra';
    if (['elementor'].includes(normalizedName)) return 'Elementor';
    if (normalizedName.includes('gulp')) return 'Gulp';
    if (normalizedName === 'blocks' || normalizedName.includes('wordpress blocks')) return 'Blocks';
    if (normalizedName.includes('element behaviour')) return 'Elements';
    if (normalizedName.includes('css layout') || normalizedName.includes('css display') || normalizedName === 'structure') return 'CSS Concepts';
    if (normalizedName.includes('ui architecture') || normalizedName.includes('information architecture')) return 'Architecture';
    if (normalizedName.includes('theme')) return 'Themes';
    if (normalizedName.includes('agile')) return 'Agile';
    if (normalizedName.includes('lazy loading') || normalizedName.includes('optimization')) return 'Performance';
    if (normalizedName.includes('debug')) return 'Debugging';
    if (normalizedName.includes('refactor')) return 'Refactoring';
    if (normalizedName.includes('testing')) return 'Testing';
    if (normalizedName.includes('data structures') || normalizedName.includes('algorithm')) return 'Algorithms';
    if (normalizedName.includes('design pattern')) return 'Patterns';
    if (normalizedName === 'oop' || normalizedName.includes('object oriented') || normalizedName.includes('object-oriented')) return 'OOP';
    if (normalizedName === 'bem' || normalizedName.includes('bem methodology')) return 'BEM';
    if (normalizedName.includes('user flow')) return 'User Flow';
    if (normalizedName.includes('ui design pattern')) return 'Patterns';
    if (normalizedName.includes('ui design') || normalizedName.includes('ui/ux')) return 'UI Design';
    if (normalizedName.includes('accessib')) return 'Accessibility';
    if (normalizedName.includes('documentation') || normalizedName.includes('outlines')) return 'Documentation';
    if (normalizedName.includes('color') || normalizedName.includes('typography')) return 'Design';
    if (normalizedName.includes('problem solving') || normalizedName.includes('communication')) return 'Soft Skills';
    if (normalizedName.includes('ai tool')) return 'AI Tools';

    return name;
  });
}
