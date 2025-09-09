import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  
  private renderer: Renderer2;
  private readonly DARK_MODE_CLASS = 'dark-mode';
  private readonly THEME_STORAGE_KEY = 'theme-preference';
  
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadThemePreference();
  }
  private loadThemePreference(): void {
    const storedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
    if (storedTheme === 'dark') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
  isDarkMode(): boolean {
    return document.body.classList.contains(this.DARK_MODE_CLASS);
  }
  toggleDarkMode(): void {
    if (this.isDarkMode()) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
  private enableDarkMode(): void {
    this.renderer.addClass(document.body, this.DARK_MODE_CLASS);
    localStorage.setItem(this.THEME_STORAGE_KEY, 'dark');
  }
  private disableDarkMode(): void {
    this.renderer.removeClass(document.body, this.DARK_MODE_CLASS);
    localStorage.setItem(this.THEME_STORAGE_KEY, 'light');
  }
}