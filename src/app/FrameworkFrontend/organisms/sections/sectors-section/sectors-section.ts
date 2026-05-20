import { Component } from '@angular/core';
import { CtaButton } from '../../../atoms/buttons/cta-button/cta-button';
import { SectorCard } from '../../../molecules/cards/sector-card/sector-card';

@Component({
  selector: 'app-sectors-section',
  imports: [SectorCard, CtaButton],
  templateUrl: './sectors-section.html',
  styleUrl: './sectors-section.scss'
})
export class SectorsSection {
  protected readonly sectors = [
    {
      title: 'Circoli di padel',
      description: 'Campi, lezioni, abbonamenti e prenotazioni in modo semplice.',
      route: '/padel',
      tone: 'padel',
      icon: 'P'
    },
    {
      title: 'Palestre e fitness',
      description: 'Corsi, ingressi, personal trainer e calendario operativo.',
      route: '/fitness',
      tone: 'fitness',
      icon: 'F'
    },
    {
      title: 'Saloni di bellezza',
      description: 'Appuntamenti, servizi, operatori e clienti ricorrenti.',
      route: '/beauty',
      tone: 'beauty',
      icon: 'B'
    },
    {
      title: 'Barberie',
      description: 'Slot rapidi, agenda, servizi e fidelizzazione clienti.',
      route: '/barber',
      tone: 'barber',
      icon: 'R'
    },
    {
      title: 'Take away',
      description: 'Ordini programmati, fasce ritiro e organizzazione cucina.',
      route: '/takeaway',
      tone: 'takeaway',
      icon: 'T'
    },
    {
      title: 'Altri settori',
      description: 'Per business che lavorano su appuntamenti, slot o clienti.',
      route: '/sectors',
      tone: 'other',
      icon: '+'
    }
  ];
}
