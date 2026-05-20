import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

@Component({
  selector: 'app-cta-button',
  imports: [RouterLink],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.scss'
})
export class CtaButton {
  @Input({ required: true }) label = '';
  @Input() href = '#';
  @Input() variant: ButtonVariant = 'primary';
  @Input() external = false;
  @Input() ariaLabel = '';

  protected get classes(): string {
    return `cta-button cta-button--${this.variant}`;
  }
}
