import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-preview',
  templateUrl: './dashboard-preview.html',
  styleUrl: './dashboard-preview.scss'
})
export class DashboardPreview {
  protected readonly kpis = [
    { label: 'Prenotazioni oggi', value: '128', trend: '+23%' },
    { label: 'Fatturato oggi', value: '4.250', trend: '+16%' },
    { label: 'Clienti attivi', value: '532', trend: '+10%' },
    { label: 'Nuovi clienti', value: '23', trend: '+12%' }
  ];

  protected readonly bookings = [
    { time: '09:00', title: 'Lezione di Padel', room: 'Campo 2', tone: 'mint' },
    { time: '10:30', title: 'Personal Training', room: 'Sala 1', tone: 'blue' },
    { time: '12:00', title: 'Taglio Uomo', room: 'Marco B.', tone: 'peach' },
    { time: '15:00', title: 'Massaggio Relax', room: 'Barbara R.', tone: 'violet' }
  ];

  protected readonly nextBookings = [
    { name: 'Marco Rossi', service: 'Lezione di Padel', time: '10:00' },
    { name: 'Giulia Bianchi', service: 'Trattamento Viso', time: '11:30' },
    { name: 'Luca Verdi', service: 'Taglio Uomo', time: '12:00' }
  ];
}
