import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { aboutMe } from '../module/app-module';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacts {

  aboutMeText = signal<string>(aboutMe) ;
  contactsDetails: any[] = []; 
  


}
