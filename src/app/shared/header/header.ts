import { Component, HostListener, inject, signal } from '@angular/core';
import { nav } from '../../module/app-module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  darkLabel = 'k';
  isScrolled = signal<boolean>(false);
  logo = signal<string>('km.png');
  headerLinks = signal<any>(nav)


  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 50);
  }

}
