import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss'
})
export class DashboardHome {
  protected readonly servedSectors = [
    'Padel',
    'Palestre',
    'Beauty',
    'Barberie',
    'Take away',
    'Altri servizi'
  ];
}
