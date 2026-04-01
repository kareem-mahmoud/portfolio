import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-re-button',
  imports: [],
  standalone: true,
  templateUrl: './re-button.html',
  styleUrl: './re-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReButton {

  buttonHref = input<string | string[]>('#');
  buttonText = input<string>('Button');
  buttonIcon = input<string>('<~>');
  buttonTarget = input<string>('_blank');
  buttonAriaLabel = input<string>('redirect button');
  buttonClass = input<string>(''); // default to empty string if no class is provided
  buttonDisabled = input<boolean>(false);

  buttonEvent = output<void>();
  onClick(): void {
    if (!this.buttonDisabled()) {
      this.buttonEvent.emit();
    }
  }

}
