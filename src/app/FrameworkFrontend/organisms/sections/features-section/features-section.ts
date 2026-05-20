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
      title: 'Prenotazioni online',
      description: 'I tuoi clienti prenotano in autonomia da web o app, con un flusso semplice e guidato.'
    },
    {
      title: 'Gestione clienti',
      description: 'Schede cliente, storico, note e preferenze in un unico spazio ordinato.'
    },
    {
      title: 'Calendario intelligente',
      description: 'Organizza risorse, operatori e servizi evitando sovrapposizioni.'
    },
    {
      title: 'Pagamenti',
      description: 'Area predisposta per futuri flussi di pagamento e gestione economica.'
    },
    {
      title: 'Marketing automatico',
      description: 'Promemoria e comunicazioni future per migliorare relazione e ritorno clienti.'
    },
    {
      title: 'Report e statistiche',
      description: 'Dashboard leggibili per monitorare prenotazioni, clienti e andamento operativo.'
    }
  ];
}
