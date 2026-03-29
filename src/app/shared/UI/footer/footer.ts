import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { nav } from '../../../module/config/config';
// import { ContactForm } from "../contact-form/contact-form";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {

  footerLinks = signal<any>(nav);

  profile = [
    { title: 'Kareem Mahmoud' },
    { email: 'Kareem.mahmoud.abd.elhannan@gmail.com' },
    { paragraph: 'Dedicated senior UI Developerwith 8+ years of experience.'},
    { info: 'Senior UI Engineer | Front end (Angular) | WordPress Developer.'},
    { logo: 'km.png'},
    { social: [
      { icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/kareem-elbeltagy', name: 'LinkedIn' },
      { icon: 'github.svg', url: 'https://github.com/Kareem-Mahmoud' , name: 'Github'},
    ]},
    { hireMe: "Ready to bring your projects to life? Click the button below to hire me or inquire about my services. Let's discuss how I can help you achieve your goals."}
    
  ]; 


}
