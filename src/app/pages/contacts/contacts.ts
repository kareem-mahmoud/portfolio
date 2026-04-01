import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aboutMe } from '../../module/content/data';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contacts {
  private readonly route = inject(ActivatedRoute);

  readonly aboutMeText = signal(aboutMe);
  readonly status = this.route.snapshot.queryParamMap.get('status');
  readonly feedbackMessage =
    this.status === 'success'
      ? 'Your message has been sent successfully.'
      : this.route.snapshot.queryParamMap.get('message');
}
