import { Component, signal } from '@angular/core';

import { form, FormField } from '@angular/forms/signals';
import { Router } from '@angular/router';

interface Contact {
  name: string;
  phone: string;
  email: string;
  Inquire?: string;
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormField],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
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
  contactModel = signal<Contact>({
      name: '',
      phone: '',
      email: '',
      Inquire: ''
  });

  contactsDetails: any[] = []; 
  
  contactForm = form(this.contactModel);
  constructor(private router: Router) {}
  onSubmit() {
    if (this.contactForm()) {
      // Submit the form data to Formspree
      fetch('https://formspree.io/f/xdaaoyyp', {
        method: 'POST',
        body: this.contactForm().toString(),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Handle successful response
          console.log('Form submitted successfully');
          // Redirect to your Contact Us page
          this.router.navigate(['/contact-us']);
        } else {
          // Handle errors
          console.error('Error submitting form', response);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }  

}
