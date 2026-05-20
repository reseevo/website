import { Component } from '@angular/core';
import { CtaButton } from '../../../atoms/buttons/cta-button/cta-button';

@Component({
  selector: 'app-contact-section',
  imports: [CtaButton],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSection {}
