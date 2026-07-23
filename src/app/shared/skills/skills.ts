import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ReButton } from '../reusable/re-button/re-button';
import { ComponentsData } from '../../module/content/data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [ReButton],
  providers: [Location],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  
  private router = inject(Router);
  herfPreventDefault = 'javascript:void(0)';
  // skillsImg = signal<string>('skills.png');
  skillsContent = signal(ComponentsData[0].Skills);
  private location$ = inject(Location, { self: true });
  currentUrl = signal('');

  constructor() {
    this.router.events.pipe(
      filter((event: unknown): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    }); // Subscribe to router events and update currentUrl signal
  }


  goBack() {
    if (window.history.length > 1) {
        this.location$.back();
    } else {
        // If there's no history, navigate to a default page (e.g., home)
        window.location.href = '/';
    }
  }


}
