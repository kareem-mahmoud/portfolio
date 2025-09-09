import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  profile = signal<any[]>([
    { title: 'Kareem Mahmoud' },
    { email: 'Kareem.mahmoud.abd.elhannan@gmail.com' },
    { paragraph: 'Dedicated senior UI Developerwith 8+ years of experience.'},
    { logo: 'km.png'},
    { social: [
      { icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/kareem-elbeltagy' },
      { icon: 'github.svg', url: 'https://github.com/Kareem-Mahmoud' },
    ]},
    
  ]);


}
