import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { nav, NavItem } from '../../../module/config/config';
import { ReButton } from '../../reusable/re-button/re-button';
import { counter } from '../../../app';
// import { ContactForm } from "../contact-form/contact-form";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReButton, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {

  footerLinks = signal<NavItem[]>(nav);
  currentYear = signal<number>(new Date().getFullYear());

  profile = [
    { title: 'Kareem Mahmoud' },
    { email: 'Kareem.mahmoud.abd.elhannan@gmail.com' },
    { paragraph: `Dedicated senior UI Engineer with ${counter()}+ years of experience.`},
    { info: 'Senior UI Engineer | Front end (Angular) | WordPress Developer.'},
    { logo: 'km.png'},
    { social: [
      { icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/kareem-elbeltagy', name: 'LinkedIn' },
      { icon: 'github.svg', url: 'https://github.com/Kareem-Mahmoud' , name: 'Github'},
    ]},
    { hireMe: "Ready to bring your projects to life? Click the button below to hire me or inquire about my services. Let's discuss how I can help you achieve your goals."}
    
  ]; 


}
