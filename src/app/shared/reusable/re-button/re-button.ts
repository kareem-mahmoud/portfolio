import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-re-button',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './re-button.html',
  styleUrl: './re-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReButton {

  buttonHref = input<string>('#');
  buttonText = input<string>('Button');
  buttonIcon = input<string>('<~>');
  buttonTarget = input<string | null>(null);
  buttonAriaLabel = input<string>('redirect button');
  buttonClass = input<string>(''); // default to empty string if no class is provided
  buttonDisabled = input<boolean>(false);
  isExternalLink = computed(() => /^(https?:|mailto:|tel:)/i.test(this.buttonHref()));
  resolvedTarget = computed(() => this.buttonTarget() ?? (this.isExternalLink() ? '_blank' : null));

  buttonEvent = output<void>();
  onClick(): void {
    if (!this.buttonDisabled()) {
      this.buttonEvent.emit();
    }
  }


}
