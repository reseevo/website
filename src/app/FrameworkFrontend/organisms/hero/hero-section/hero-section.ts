import { Component } from '@angular/core';
import { CtaButton } from '../../../atoms/buttons/cta-button/cta-button';

@Component({
  selector: 'app-hero-section',
  imports: [CtaButton],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  protected readonly trustItems = [
    '14 giorni di prova futura',
    'Setup guidato',
    'Pensato per piu settori'
  ];

  protected readonly brandExamples = [
    'Circolo Padel',
    'Fit Life',
    'BeautyLab',
    'BarberOne',
    'Sushi Time',
    'Pizza Express'
  ];
}
