import { Component, inject, signal } from '@angular/core';
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

  logo = signal<string>('km.png');
  headerLinks = signal<any>(nav)

}
