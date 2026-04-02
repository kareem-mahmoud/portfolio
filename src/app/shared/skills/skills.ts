import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-skills',
  imports: [],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  
  private router = inject(Router);
  skillsImg = signal<string>('skills.png');
  currentUrl = signal('');

  constructor() {
    this.router.events.pipe(
      filter((event: unknown): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    }); // Subscribe to router events and update currentUrl signal
  }


}
