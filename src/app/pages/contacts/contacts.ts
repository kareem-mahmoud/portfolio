import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { aboutMe } from '../../module/content/data';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacts {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);

  readonly aboutMeText = signal(aboutMe);
  readonly isSending = signal(false);
  readonly status = signal<'success' | 'error' | null>(
    this.route.snapshot.queryParamMap.get('status') === 'success' ? 'success' : null
  );
  readonly feedbackMessage = signal(
    this.status() === 'success'
      ? 'Your message has been sent successfully.'
      : this.route.snapshot.queryParamMap.get('message') ?? ''
  );

  sendMessage(form: NgForm): void {
    if (form.invalid || this.isSending()) {
      return;
    }

    this.isSending.set(true);
    this.status.set(null);
    this.feedbackMessage.set('');

    this.http.post<{ message?: string; code?: string }>('/contact.php', form.value).subscribe({
      next: (response) => {
        this.status.set('success');
        this.feedbackMessage.set(response.message ?? 'Your message has been sent successfully.');
        form.resetForm();
        this.isSending.set(false);
      },
      error: (error) => {
        this.status.set('error');
        const message = error?.error?.message ?? 'Unable to send your message. Please try again later.';
        const code = error?.error?.code;
        this.feedbackMessage.set(code ? `${message} (${code})` : message);
        this.isSending.set(false);
      }
    });
  }
}
