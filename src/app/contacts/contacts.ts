import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacts {


  aboutMe: string = `Dedicated Specialist UI Developer with 8+ years of expertise 
                            in HTML, CSS, JavaScript, and UI/UX design. 
                            Skilled in building intuitive, 
                            user-centered interfaces that improve user experience and 
                            ensure maintainable, high-quality code. 
                            Proven ability to collaborate effectively with 
                            cross-functional teams to exceed project objectives. 
                            Committed to continuous learning and delivering innovative, 
                            scalable web solutions.`;

  contactsDetails: any[] = []; 
  


}
