import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { nav, NavItem } from '../../../module/config/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {

  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);
  logo = signal<string>('km.png');
  headerLinks = signal<NavItem[]>(nav);


  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 50);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth >= 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((isOpen: boolean) => !isOpen);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
