import { Component } from '@angular/core';
import { FeatureCard } from '../../../molecules/cards/feature-card/feature-card';

@Component({
  selector: 'app-features-section',
  imports: [FeatureCard],
  templateUrl: './features-section.html',
  styleUrl: './features-section.scss'
})
export class FeaturesSection {
  protected readonly features = [
    {
      icon: '01',
      title: 'Prenotazioni online',
      description: 'I tuoi clienti prenotano in autonomia da web o app, con un flusso semplice e guidato.'
    },
    {
      icon: '02',
      title: 'Gestione clienti',
      description: 'Schede cliente, storico, note e preferenze in un unico spazio ordinato.'
    },
    {
      icon: '03',
      title: 'Calendario intelligente',
      description: 'Organizza risorse, operatori e servizi evitando sovrapposizioni.'
    },
    {
      icon: '04',
      title: 'Pagamenti',
      description: 'Area predisposta per futuri flussi di pagamento e gestione economica.'
    },
    {
      icon: '05',
      title: 'Marketing automatico',
      description: 'Promemoria e comunicazioni future per migliorare relazione e ritorno clienti.'
    },
    {
      icon: '06',
      title: 'Report e statistiche',
      description: 'Dashboard leggibili per monitorare prenotazioni, clienti e andamento operativo.'
    }
  ];
}
