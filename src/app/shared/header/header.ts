import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme/theme-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  
  private themeService = inject(ThemeService);
  darkLabel = signal(this.themeService.isDarkMode());

  logo = signal<string>('km.png');
  headerLinks = signal<any>([
    { name: 'Home', link: '/' },
    { name: 'Works', link: '/works' },
    { name: 'About-me', link: '/about-me' },
    { name: 'Contacts', link: '/contacts' },
  ])

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

}
