import { Component, signal } from '@angular/core';
import { nav } from '../../module/app-module';
import { ContactForm } from "../contact-form/contact-form";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  footerLinks = signal<any>(nav);

  profile: any[] = [
    { title: 'Kareem Mahmoud' },
    { email: 'Kareem.mahmoud.abd.elhannan@gmail.com' },
    { paragraph: 'Dedicated senior UI Developerwith 8+ years of experience.'},
    { info: 'Senior UI Developer | Front end (Angular) | WordPress Developer | UI & Graphic Designer.'},
    { logo: 'km.png'},
    { social: [
      { icon: 'linkedin.svg', url: 'https://www.linkedin.com/in/kareem-elbeltagy', name: 'LinkedIn' },
      { icon: 'github.svg', url: 'https://github.com/Kareem-Mahmoud' , name: 'Github'},
    ]},
    { hireMe: "Ready to bring your projects to life? Click the button below to hire me or inquire about my services. Let's discuss how I can help you achieve your goals."}
    
  ]; 


}
