import { Component } from '@angular/core';
import { CtaButton } from '../../../atoms/buttons/cta-button/cta-button';
import { TutorialCard } from '../../../molecules/cards/tutorial-card/tutorial-card';

@Component({
  selector: 'app-tutorials-section',
  imports: [TutorialCard, CtaButton],
  templateUrl: './tutorials-section.html',
  styleUrl: './tutorials-section.scss'
})
export class TutorialsSection {
  protected readonly tutorials = [
    { index: '01', title: 'Panoramica generale', duration: '2:35', tone: 'calendar' },
    { index: '02', title: 'Gestione prenotazioni', duration: '3:12', tone: 'dark' },
    { index: '03', title: 'Gestione clienti', duration: '2:45', tone: 'clients' },
    { index: '04', title: 'Comunicazioni automatiche', duration: '2:26', tone: 'calendar' },
    { index: '05', title: 'Report e statistiche', duration: '3:05', tone: 'reports' }
  ];
}
