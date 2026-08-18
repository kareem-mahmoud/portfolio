import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ReButton } from '../reusable/re-button/re-button';
import { ComponentsData } from '../../module/content/data';
import { Location } from '@angular/common';
import { SkillsServices } from '../../services/skills/skills-services';
import type { Skills as Skill } from '../../module/models/app-models';
import { SkillIcon } from '../reusable/skill-icon/skill-icon';

@Component({
  selector: 'app-skills',
  imports: [ReButton, SkillIcon],
  providers: [SkillsServices, Location],
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills implements OnInit{
  
  private router = inject(Router);
  herfPreventDefault = 'javascript:void(0)';
  // skillsImg = signal<string>('skills.png');
  skillsContent = signal(ComponentsData[0].Skills);
  private location$ = inject(Location, { self: true });
  private skillsServices = inject(SkillsServices, { self: true });
  currentUrl = signal(this.router.url);
  skills = signal<Skill[]>([]);
  skillsError = signal<string | null>(null);

  constructor() {
    this.router.events.pipe(
      filter((event: unknown): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl.set(event.urlAfterRedirects);
    }); // Subscribe to router events and update currentUrl signal
  }

  ngOnInit(): void {
    this.renderSkills();
  }

  renderSkills() {
    this.skillsServices.getSkills().subscribe({
      next: (data: Skill[]) => {
        // HttpClient does not validate the response at runtime. Keep the
        // signal an array even if the API sends an unexpected payload.
        this.skills.set(Array.isArray(data) ? data : []);
        this.skillsError.set(null);
      },
      error: (error) => {
        console.error('Error fetching skills:', error);
        this.skills.set([]);
        this.skillsError.set('Skills could not be loaded. Please try again later.');
      }
    });
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
